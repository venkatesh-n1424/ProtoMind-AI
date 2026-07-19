from agents.base_agent import BaseAgent
from prompts.research_gap_prompt import RESEARCH_GAP_PROMPT
from schemas.research_gap_schema import ResearchGapSchema


class ResearchGapAgent(BaseAgent):

    def analyze(self, context: dict):
        paper = f"""
Discussion:

{context["discussion"]}

Conclusion:

{context["conclusion"]}
"""

        return self.run(
            RESEARCH_GAP_PROMPT,
            paper,
            ResearchGapSchema
        )