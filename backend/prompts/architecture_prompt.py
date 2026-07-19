ARCHITECTURE_PROMPT = """
You are a Senior AI Software Architect.

Convert this research paper into a software architecture.

Return ONLY valid JSON.

JSON Format:

{{
    "frontend":[],
    "backend":[],
    "database":[],
    "ai_models":[],
    "deployment":[],
    "folder_structure":[]
}}

Research Paper:

{paper}
"""