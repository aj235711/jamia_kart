from typing import List, Optional
from pydantic import BaseModel

class SellerAndCustomer(BaseModel):
    id : int
    loc : str
    # joined : str
    phone_number : int

    class Config():
        orm_mode = True

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
    phone_number : int

class UserShow(BaseModel):
    email : str
    name : str
    category : str
    seller_detail : Optional[SellerAndCustomer]
    customer_detail : Optional[SellerAndCustomer]
    class Config():
        orm_mode=True

class UserUpdate(BaseModel):
    name : str
    loc : str
    phone_number : int
    class Config():
        orm_mode=True

class PasswordUpdate(BaseModel):
    password : str
"""
SELLER schema
"""

class SellerUpdate(BaseModel):
    location : str
    phone_number : int


"""
COSTUMER schema
"""

class CostumerUpdate(BaseModel):
    location : str
    phone_number : int

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

class ProductEdit(BaseModel):
    imgurl : str
    qty : int
    price : float

class ProductShow(Product):
    id : int
    seller : UserShow
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
    costumer_cart : SellerAndCustomer
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
    phone_number : int

class OrderShow(BaseModel):
    id : int
    qty : int
    ship_add : str
    status : bool
    amount : float
    ship_add : str
    phone_number : int
    product_order : ProductShow
    costumer_order : SellerAndCustomer
    
    class Config():
        orm_mode=True

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

