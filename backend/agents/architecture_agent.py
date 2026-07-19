from agents.base_agent import BaseAgent
from prompts.architecture_prompt import ARCHITECTURE_PROMPT
from schemas.architecture_schema import ArchitectureSchema


class ArchitectureAgent(BaseAgent):

    def analyze(self, context: dict):
        paper = f"""
Abstract:

{context["abstract"]}

Methodology:

{context["methodology"]}

Results:

{context["results"]}
"""

        return self.run(
            ARCHITECTURE_PROMPT,
            paper,
            ArchitectureSchema
        )