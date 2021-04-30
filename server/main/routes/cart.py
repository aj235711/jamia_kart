from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from typing import List,Optional
from storage import schema,database,models
from security import oauth2

route=APIRouter(
    prefix="/cart",
    tags=["Cart"]
)

get_current_user=oauth2.get_current_user
get_db = database.get_db

@route.post("/")
async def create_cart(request : schema.Cart,db : Session = Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    """
    creates cart
    """
    user =  db.query(models.User).filter(models.User.email==current_user.email).first()
    if user.category != "customer":
        return {"success":False, "errMsg":"not a customer"}
    product = db.query(models.Product).filter(models.Product.id==request.product_id).first()
    if not product or request.qty>product.qty:
        return {"success":False, "errMsg":"no such product found"}
    if request.qty <= 0:
        return {"success":False, "errMgs":"Quantity must be grater than zero"}
    new_cart = models.Cart(qty=request.qty,costumer_id=user.costumer_id,product_id=request.product_id)
    db.add(new_cart)
    db.commit()
    db.refresh(new_cart)
    return new_cart

@route.get("/",response_model=List[schema.CartShow])
async def all_cart_items(db : Session = Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    """
    get all cart items of customer
    """
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    if user.category == "customer":
        cart_items=db.query(models.Cart).filter(models.Cart.costumer_id==user.costumer_id).all()
        return cart_items

@route.put("/update/{id}")
async def cart_update(id : int,qty : int,db : Session = Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    """
    update cart item
    """
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    if user.category != "customer":
        return {"success":False, "errMsg":"not a customer"}
    cart_item = db.query(models.Cart).filter(models.Cart.id==id)
    if not cart_item.first():
        return {"success":False, "errMsg":"no such cart item"}
    if cart_item.first().costumer_id==user.costumer_id:
        cart_item.update({"qty":qty},synchronize_session=False)
        db.commit()
        return {"success":True,"msg":"cart updated"}
    return {"success":False, "errMsg":"not a customer"}

@route.delete("/delete/{id}")
async def delete_cart(id : int,db : Session = Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    """
    delete cart item
    """
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    if user.category != "customer":
        return {"success":False, "errMsg":"not a customer"}
    cart_item = db.query(models.Cart).filter(models.Cart.id==id)
    if user.costumer_id == cart_item.first().costumer_id:
        cart_item.delete()
        db.commit()
        return {"success":True,"msg":"item removed from cart"}
    return {"success":False, "errMsg":"not a customer"}
