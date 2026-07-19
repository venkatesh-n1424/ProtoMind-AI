import json
import time

from google import genai
from google.genai.errors import ClientError

from app.config import GEMINI_API_KEY

client = genai.Client(api_key=GEMINI_API_KEY)


class GeminiClient:

    @staticmethod
    def generate(prompt: str):

        MAX_RETRIES = 3
        BASE_WAIT = 5

        for attempt in range(MAX_RETRIES):

            try:

                response = client.models.generate_content(
                    model="gemini-3.5-flash",
                    contents=prompt,
                )

                text = response.text.strip()

                if text.startswith("```json"):
                    text = text.replace("```json", "", 1)

                if text.startswith("```"):
                    text = text.replace("```", "", 1)

                if text.endswith("```"):
                    text = text[:-3]

                text = text.strip()

                try:
                    return json.loads(text)

                except json.JSONDecodeError:

                    return {
                        "status": "error",
                        "message": "Gemini returned invalid JSON.",
                        "raw_response": response.text,
                    }

            except ClientError as e:

                error_message = str(e)

                print("\n" + "=" * 70)
                print("Gemini ClientError")
                print(error_message)
                print("=" * 70 + "\n")

                if (
                    "RESOURCE_EXHAUSTED" in error_message
                    or "429" in error_message
                ):

                    if attempt < MAX_RETRIES - 1:

                        wait_time = BASE_WAIT * (attempt + 1)

                        print(
                            f"Rate limit reached. Retrying in {wait_time} seconds..."
                        )

                        time.sleep(wait_time)

                        continue

                return {
                    "status": "error",
                    "message": error_message,
                    "type": "ClientError",
                }

            except Exception as e:

                print("\n" + "=" * 70)
                print("Gemini Exception")
                print(repr(e))
                print("=" * 70 + "\n")

                if attempt < MAX_RETRIES - 1:

                    wait_time = BASE_WAIT * (attempt + 1)

                    print(
                        f"Retrying in {wait_time} seconds..."
                    )

                    time.sleep(wait_time)

                    continue

                return {
                    "status": "error",
                    "message": repr(e),
                    "type": type(e).__name__,
                }

        return {
            "status": "error",
            "message": "Gemini failed after multiple retries.",
        }