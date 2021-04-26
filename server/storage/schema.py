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
    # seller_id : int
    # costumer_id : int
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

class SellerUpdate(BaseModel):
    location : str


"""
COSTUMER schema
"""

class CostumerUpdate(BaseModel):
    location : str

"""
PRODUCT schema
"""

class Product(BaseModel):
    name : str
    imgurl : str
    qty : int
    price : float
    category : str
    desc : str

class ProductShow(Product):
    id : int
    class Config():
        orm_mode=True

"""
CART schema
"""

class Cart(BaseModel):
    product_id : int
    qty : int

class CartShow(Cart):
    product_cart : ProductShow
    id : int
    class Config():
        orm_mode=True

"""
ORDER schemas
"""

class Order(BaseModel):
    product_id : int
    qty : int
    shipping_add : str
    cart_id : int

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

