from fastapi import APIRouter, Depends, HTTPException, status, Response
import pydantic
from sqlalchemy.orm import Session
from typing import List,Optional
from storage import schema,database,models
from security import oauth2

route=APIRouter(
    prefix="/products",
    tags=["Product"]
)

get_current_user=oauth2.get_current_user
get_db = database.get_db

@route.post("/",response_model=schema.ProductShow)
def create_product(request : schema.Product, db: Session=Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    """
    create product
    """
    user=db.query(models.User).filter(models.User.email==current_user.email).first()
    if not user:
        return {"success":False,"errMsg":"no such user"}
    if user.category != "seller":
        return {"success":False,"errMsg":"not a seller"}
    new_product=models.Product(name=request.name,desc=request.desc,imgurl=request.imgurl,qty=request.qty,price=request.price,category=request.category,seller_id=user.seller_id)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

@route.get("/saare",response_model = List[schema.ProductShow])
def all_products(db : Session = Depends(get_db)):
    """
    list all products
    """
    products=db.query(models.Product).all()
    return products

@route.get("/akela/{id}",response_model=schema.ProductShow)
def single_product(id:int,db : Session = Depends(get_db)):
    """
    return a single product or null
    """
    product=db.query(models.Product).filter(models.Product.id==id).first()
    if product:
        return product
    