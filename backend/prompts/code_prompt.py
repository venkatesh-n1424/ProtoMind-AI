CODE_GENERATOR_PROMPT = """
You are a Senior AI Software Engineer.

Generate the project structure required to implement this research paper.

Return ONLY valid JSON.

JSON Format:

{{
    "folder_structure":[],
    "backend_files":[],
    "frontend_files":[],
    "api_endpoints":[],
    "database_schema":[],
    "requirements":[]
}}

Research Paper:

{paper}
"""