from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, Float
from sqlalchemy.orm import relationship

from storage.database import Base

#mysql
# class User(Base):
#     __tablename__="user"
#     email=Column(String(length=100), primary_key=True,unique=True, )
#     name=Column(String(length=100))
#     password=Column(String(length=10))
#     category=Column(String(length=10))
class User(Base):
    __tablename__="user"
    email=Column(String, primary_key=True,unique=True)
    name=Column(String)
    password=Column(String)
    category=Column(String)
    seller_id=Column(Integer,ForeignKey("seller.id"))
    costumer_id=Column(Integer,ForeignKey("costumer.id"))


class Seller(Base):
    __tablename__="seller"
    id=Column(Integer,autoincrement=True,primary_key=True)
    # user_id=Column(String,ForeignKey("user.email"))
    loc=Column(String)
    joined=Column(Date)

class Costumer(Base):
    __tablename__="costumer"
    id=Column(Integer,autoincrement=True,primary_key=True)
    # user_id=Column(String,ForeignKey("user.email"))
    loc=Column(String)
    joined=Column(Date)
    cart=relationship("Cart",back_populates="costumer_cart")
    order=relationship("Order",back_populates="costumer_order")

class Product(Base):
    __tablename__="product"
    id=Column(Integer,primary_key=True,autoincrement=True)
    name=Column(String,nullable=False)
    desc=Column(String)
    imgurl=Column(String)
    qty=Column(Integer,nullable=False)
    price=Column(Float,nullable=False)
    category=Column(String)
    seller_id=Column(Integer,ForeignKey("seller.id"),nullable=False)
    cart=relationship("Cart",back_populates="product_cart")
    order=relationship("Order",back_populates="product_order")

class Cart(Base):
    __tablename__="cart"
    id=Column(Integer,primary_key=True,autoincrement=True)
    qty=Column(Integer,nullable=False)
    costumer_id=Column(Integer,ForeignKey("costumer.id"))
    product_id=Column(Integer,ForeignKey("product.id"))
    costumer_cart=relationship("Costumer",back_populates="cart")
    product_cart=relationship("Product",back_populates="cart")

class Order(Base):
    __tablename__="order"
    id=Column(Integer,primary_key=True,autoincrement=True)
    qty=Column(Integer,nullable=False)
    costumer_id=Column(Integer,ForeignKey("costumer.id"))
    product_id=Column(Integer,ForeignKey("product.id"))
    status=Column(Boolean,default=False)
    ship_add=Column(String,nullable=False)
    amount=Column(Float,nullable=False)
    costumer_order=relationship("Costumer",back_populates="order")
    product_order=relationship("Product",back_populates="order")

