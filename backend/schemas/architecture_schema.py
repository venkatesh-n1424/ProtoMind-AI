from pydantic import BaseModel
from typing import List, Optional, Any


class ArchitectureItem(BaseModel):
    name: str
    description: Optional[str] = None
    components: Optional[List[str]] = None
    technologies: Optional[List[str]] = None
    features: Optional[List[str]] = None


class DeploymentItem(BaseModel):
    type: str
    description: Optional[str] = None
    services: Optional[List[str]] = None


class FolderNode(BaseModel):
    root: str
    children: List[Any]


class ArchitectureSchema(BaseModel):
    frontend: List[ArchitectureItem]
    backend: List[ArchitectureItem]
    database: List[ArchitectureItem]
    ai_models: List[ArchitectureItem]
    deployment: List[DeploymentItem]
    folder_structure: List[FolderNode]