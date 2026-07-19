from pydantic import BaseModel
from typing import List, Dict, Any


class ApiEndpoint(BaseModel):
    method: str
    path: str
    description: str
    request: Dict[str, Any]
    response: Dict[str, Any]


class DatabaseTable(BaseModel):
    table_name: str
    columns: List[Dict[str, Any]]


class CodeSchema(BaseModel):
    folder_structure: List[str]
    backend_files: List[str]
    frontend_files: List[str]

    api_endpoints: List[ApiEndpoint]

    database_schema: List[DatabaseTable]

    requirements: List[str]