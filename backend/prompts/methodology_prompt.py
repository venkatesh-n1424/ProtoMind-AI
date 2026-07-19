METHODOLOGY_PROMPT = """
You are an expert Machine Learning researcher.

Analyze the paper.

Return ONLY valid JSON.

JSON Format:

{{
    "methodology":"",
    "workflow":[],
    "algorithms":[],
    "neural_networks":[],
    "loss_functions":[],
    "training_strategy":""
}}

Research Paper:

{paper}
"""