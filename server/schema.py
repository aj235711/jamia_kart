from typing import Optional
from pydantic import BaseModel

class User(BaseModel):
    email : str
    name : str
    password : str
    category : str