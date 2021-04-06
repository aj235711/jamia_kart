from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from storage.database import Base

class User(Base):
    __tablename__="user"
    email=Column(String, primary_key=True,unique=True)
    name=Column(String)
    password=Column(String)
    category=Column(String)