from agents.base_agent import BaseAgent
from prompts.roadmap_prompt import ROADMAP_PROMPT
from schemas.roadmap_schema import RoadmapSchema


class RoadmapAgent(BaseAgent):

    def analyze(self, context: dict):
        paper = context["full_text"][:18000]

        return self.run(
            ROADMAP_PROMPT,
            paper,
            RoadmapSchema
        )