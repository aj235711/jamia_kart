from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date, Float ,DECIMAL,ForeignKeyConstraint,CHAR
from sqlalchemy.orm import relationship

from storage.database import Base


class User(Base):
    __tablename__="user"
    email=Column(CHAR(length=100), primary_key=True,unique=True, )
    name=Column(CHAR(length=100))
    password=Column(CHAR(length=200))
    category=Column(CHAR(length=10))
    seller_id=Column(Integer,ForeignKey("seller.id",ondelete="CASCADE"))
    costumer_id=Column(Integer,ForeignKey("costumer.id",ondelete="CASCADE"))
    seller_detail=relationship("Seller",back_populates="user")
    customer_detail=relationship("Costumer",back_populates="user")
    product=relationship("Product",back_populates="seller")


class Seller(Base):
    __tablename__="seller"
    id=Column(Integer,autoincrement=True,primary_key=True)
    loc=Column(String(length=500))
    joined=Column(Date)
    phone_number=Column(Integer,nullable=False)
    user=relationship("User",back_populates="seller_detail")




class Costumer(Base):
    __tablename__="costumer"
    id=Column(Integer,autoincrement=True,primary_key=True)
    loc=Column(String(length=500))
    joined=Column(Date)
    phone_number=Column(Integer,nullable=False)
    cart=relationship("Cart",back_populates="costumer_cart")
    order=relationship("Order",back_populates="costumer_order")
    user=relationship("User",back_populates="customer_detail")


class Product(Base):
    __tablename__="product"
    id=Column(Integer,primary_key=True,autoincrement=True)
    name=Column(String(length=100),nullable=False)
    desc=Column(String(length=500))
    imgurl=Column(String(length=500))
    qty=Column(Integer,nullable=False)
    price=Column(Float,nullable=False)
    category=Column(String(length=50))
    # seller_id=Column(Integer,ForeignKey("seller.id",ondelete="CASCADE"),nullable=False)
    user=Column(String(length=100),ForeignKey("user.email",ondelete="CASCADE"),nullable=False)
    seller=relationship("User",back_populates="product")
    cart=relationship("Cart",back_populates="product_cart")
    order=relationship("Order",back_populates="product_order")


class Cart(Base):
    __tablename__="cart"
    id=Column(Integer,primary_key=True,autoincrement=True)
    qty=Column(Integer,nullable=False)
    costumer_id=Column(Integer,ForeignKey("costumer.id",ondelete="CASCADE"))
    product_id=Column(Integer,ForeignKey("product.id",ondelete="CASCADE"))
    costumer_cart=relationship("Costumer",back_populates="cart")
    product_cart=relationship("Product",back_populates="cart")


class Order(Base):
    __tablename__="order"
    id=Column(Integer,primary_key=True,autoincrement=True)
    qty=Column(Integer,nullable=False)
    costumer_id=Column(Integer,ForeignKey("costumer.id",ondelete="CASCADE"))
    product_id=Column(Integer,ForeignKey("product.id",ondelete="CASCADE"))
    status=Column(Boolean,default=False)
    ship_add=Column(String(length=500),nullable=False)
    amount=Column(Float,nullable=False)
    phone_number=Column(Integer, nullable=False)
    costumer_order=relationship("Costumer",back_populates="order")
    product_order=relationship("Product",back_populates="order")

