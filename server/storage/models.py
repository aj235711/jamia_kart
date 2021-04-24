from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, Date
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



class Seller(Base):
    __tablename__="seller"
    id=Column(Integer,autoincrement=True,primary_key=True)
    user_id=Column(String,ForeignKey("user.email"))
    loc=Column(String)
    joined=Column(Date)

class Costumer(Base):
    __tablename__="costumer"
    id=Column(Integer,autoincrement=True,primary_key=True)
    user_id=Column(String,ForeignKey("user.email"))
    loc=Column(String)
    joined=Column(Date)