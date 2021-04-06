from typing import Optional
from pydantic import BaseModel

class User(BaseModel):
    email : str
    name : str
    password : str
    category : str

class User_Show(BaseModel):
    email : str
    name : str
    category : str

    class Config():
        orm_mode=True

class User_Update(BaseModel):
    name : str
    password : str
    category : str
    class Config():
        orm_mode=True