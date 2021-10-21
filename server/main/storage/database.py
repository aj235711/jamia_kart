from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker


SQLALCHEMY_DATABASE_URL = "sqlite:///./base.db"

#create a database with name jamia_cart
# engine = create_engine("mysql+pymysql://root:test@localhost/jamia_cart")
# engine = create_engine("mysql+pymysql://MW9iZ6mPtD:oJcYvUzER3@remotemysql.com/MW9iZ6mPtD")
engine = create_engine("mysql+pymysql://sql6445904:D1Uedn44Bg@sql6.freemysqlhosting.net/sql6445904")
# engine = create_engine(
#     SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False} #connect args is only needed for sqlite
# )

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db=SessionLocal()
    try:
        yield db
    finally:
        # print("error occured")
        db.close()
