SUMMARY_PROMPT = """
You are an expert AI researcher.

Analyze the following research paper.

Return ONLY valid JSON.

Do NOT include markdown.
Do NOT include ```json.
Do NOT explain your answer.

JSON Format:

{{
    "title": "",
    "summary": "",
    "objective": "",
    "contributions": [],
    "applications": []
}}

Research Paper:

{paper}
"""