import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List
from starlette.middleware.cors import CORSMiddleware
import storage.schema as schema
import storage.database as database
import storage.models as models
from routes import  user, authentication,admin,seller,costumer,product,cart, order
# from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

get_db = database.get_db

@app.get("/")
def check():
    return {"msg":"working"}

# @app.on_event("shutdown")
# def shutdown_event(db:Session=Depends(get_db)):
#     print("connection closed")
#     db.close()
    
    
app.include_router(authentication.route)
app.include_router(user.route)
app.include_router(admin.route)
app.include_router(seller.route)
app.include_router(costumer.route)
app.include_router(product.route)
app.include_router(cart.route)
app.include_router(order.route)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],)

models.Base.metadata.create_all(bind=database.engine)

#if __name__ == "__main__":
#    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
