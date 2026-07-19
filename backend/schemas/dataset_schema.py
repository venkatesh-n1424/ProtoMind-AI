from pydantic import BaseModel
from typing import List


class Dataset(BaseModel):

    name: str

    link: str

    license: str

    data_type: str

    size: str

    reason: str

    preprocessing: str


class DatasetSchema(BaseModel):

    datasets: List[Dataset]