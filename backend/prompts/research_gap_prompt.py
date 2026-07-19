RESEARCH_GAP_PROMPT = """
You are an experienced AI researcher.

Analyze the following paper.

Return ONLY valid JSON.

JSON Format:

{{
    "research_gaps":[],
    "limitations":[],
    "future_work":[],
    "improvements":[]
}}

Research Paper:

{paper}
"""