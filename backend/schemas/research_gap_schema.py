from pydantic import BaseModel
from typing import List


class ResearchGapSchema(BaseModel):

    research_gaps: List[str]

    limitations: List[str]

    future_work: List[str]

    improvements: List[str]