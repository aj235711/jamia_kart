from typing import Optional
from pydantic import BaseModel

"""
USER schemas
"""
class User(BaseModel):
    email : str
    name : str
    password : str
    category : str

class UserCreate(User):
    location : str

class UserShow(BaseModel):
    email : str
    name : str
    category : str
    class Config():
        orm_mode=True

class UserUpdate(BaseModel):
    name : str
    password : str
    category : str
    location : str
    class Config():
        orm_mode=True

"""
SELLER schema
"""

class Seller(BaseModel):
    location : str


"""
AUTH schemas
"""
        
class Login(BaseModel):
    username: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str]=None

