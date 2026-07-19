from agents.base_agent import BaseAgent
from prompts.dataset_prompt import DATASET_PROMPT
from schemas.dataset_schema import DatasetSchema


class DatasetAgent(BaseAgent):

    def analyze(self, context: dict):
        paper = f"""
Abstract:

{context["abstract"]}

Methodology:

{context["methodology"]}
"""

        return self.run(
            DATASET_PROMPT,
            paper,
            DatasetSchema
        )