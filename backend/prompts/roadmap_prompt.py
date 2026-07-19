ROADMAP_PROMPT = """
You are an AI mentor.

Create a complete implementation roadmap.

Return ONLY valid JSON.

JSON Format:

{{
    "roadmap":[
        {{
            "week":"",
            "goal":"",
            "tasks":[]
        }}
    ]
}}

Research Paper:

{paper}
"""