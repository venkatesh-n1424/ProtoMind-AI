DATASET_PROMPT = """
You are an AI research assistant.

Recommend the best datasets required to implement this paper.

Return ONLY valid JSON.

JSON Format:

{{
    "datasets":[
        {{
            "name":"",
            "link":"",
            "license":"",
            "data_type":"",
            "size":"",
            "reason":"",
            "preprocessing":""
        }}
    ]
}}

Research Paper:

{paper}
"""