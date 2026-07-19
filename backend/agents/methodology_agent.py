from agents.base_agent import BaseAgent
from prompts.methodology_prompt import METHODOLOGY_PROMPT
from schemas.methodology_schema import MethodologySchema


class MethodologyAgent(BaseAgent):

    def analyze(self, context: dict):
        paper = f"""
Introduction:

{context["introduction"]}

Methodology:

{context["methodology"]}

Results:

{context["results"]}
"""

        return self.run(
            METHODOLOGY_PROMPT,
            paper,
            MethodologySchema
        )