from time import sleep
from app.services.gemini_client import GeminiClient


class BaseAgent:

    def run(self, prompt_template: str, context: str, schema):

        try:
            prompt = prompt_template.format(
                paper=context
            )

            response = GeminiClient.generate(prompt)

            # Gemini/API error
            if isinstance(response, dict) and response.get("status") == "error":
                return response

            # Validate the response
            validated = schema.model_validate(response)

            # Small delay to reduce free-tier rate limit
            sleep(2)

            # Return ONLY validated data (no extra nesting)
            return validated.model_dump()

        except Exception as e:
            return {
                "status": "error",
                "message": str(e),
                "type": type(e).__name__,
            }