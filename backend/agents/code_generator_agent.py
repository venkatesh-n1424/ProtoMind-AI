from agents.base_agent import BaseAgent
from prompts.code_prompt import CODE_GENERATOR_PROMPT
from schemas.code_schema import CodeSchema


class CodeGeneratorAgent(BaseAgent):

    def analyze(self, context: dict):
        paper = context["full_text"][:22000]

        return self.run(
            CODE_GENERATOR_PROMPT,
            paper,
            CodeSchema
        )