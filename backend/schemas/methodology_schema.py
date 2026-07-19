from pydantic import BaseModel
from typing import List


class MethodologySchema(BaseModel):

    methodology: str

    workflow: List[str]

    algorithms: List[str]

    neural_networks: List[str]

    loss_functions: List[str]

    training_strategy: str