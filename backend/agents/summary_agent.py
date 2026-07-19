from agents.base_agent import BaseAgent
from prompts.summary_prompt import SUMMARY_PROMPT
from schemas.summary_schema import SummarySchema


class SummaryAgent(BaseAgent):

    def summarize(self, context: dict):
        paper = f"""
Abstract:

{context["abstract"]}

Conclusion:

{context["conclusion"]}
"""

        return self.run(
            SUMMARY_PROMPT,
            paper,
            SummarySchema
        )