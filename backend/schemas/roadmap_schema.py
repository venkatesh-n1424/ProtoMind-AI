from pydantic import BaseModel
from typing import List


class RoadmapStep(BaseModel):

    week: str

    goal: str

    tasks: List[str]


class RoadmapSchema(BaseModel):

    roadmap: List[RoadmapStep]