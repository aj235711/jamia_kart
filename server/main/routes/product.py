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
async def create_product(request : schema.Product, db: Session=Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    """
    create product
    """
    user=db.query(models.User).filter(models.User.email==current_user.email).first()
    if not user:
        return {"success":False,"errMsg":"no such user"}
    if user.category != "seller":
        return {"success":False,"errMsg":"not a seller"}
    new_product=models.Product(name=request.name,desc=request.desc,imgurl=request.imgurl,qty=request.qty,price=request.price,category=request.category,user=user.email)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

@route.get("/saare",response_model = List[schema.ProductShow])
async def all_products(db : Session = Depends(get_db)):
    """
    list all products
    """
    products=db.query(models.Product).all()
    return products

@route.get("/saare/mere",response_model = List[schema.ProductShow])
async def mere_products(db : Session = Depends(get_db), current_user : schema.User =Depends(get_current_user)):
    user = db.query(models.User).filter(models.User.email == current_user.email).first()
    if user and user.category == "seller":
        products = db.query(models.Product).filter(models.Product.user==user.email).all()
        return products

@route.get("/akela/{id}",response_model=schema.ProductShow)
async def single_product(id:int,db : Session = Depends(get_db)):
    """
    return a single product or null
    """
    product=db.query(models.Product).filter(models.Product.id==id).first()
    if product:
        return product

@route.put("/edit/{id}")
async def edit_product(id : int, request : schema.ProductEdit, db : Session = Depends(get_db), current_user : schema.User = Depends(get_current_user)):
    """
    edit product
    """
    user = db.query(models.User).filter(models.User.email == current_user.email).first()
    product = db.query(models.Product).filter(models.Product.id==id)
    if user  and user.category == "seller" and product.first() and user.email == product.first().user:
        img = request.imgurl
        daam = request.price
        qnty = request.qty
        if img == "":
            img = product.first().imgurl
        if daam == -1:
            daam = product.first().price
        if qnty == -1:
            qnty = product.first().qty
    product.update({"qty":qnty,"price":daam,"imgurl":img},synchronize_session=False)
    db.commit()
    return product.first()
