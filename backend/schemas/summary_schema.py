from pydantic import BaseModel
from typing import List


class SummarySchema(BaseModel):

    title: str

    summary: str

    objective: str

    contributions: List[str]

    applications: List[str]