from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from typing import List,Optional
from storage import schema,database,models
from security import oauth2

route=APIRouter(
    prefix="/order",
    tags=["Order"]
)

get_current_user=oauth2.get_current_user
get_db = database.get_db

@route.post("/")
async def create_order(request : schema.Order, db : Session = Depends(get_db), current_user : schema.User=Depends(get_current_user)):
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    if (not user) or user.category!="customer":
        return {"success":False, "errMsg": "not a customer"}
    product = db.query(models.Product).filter(models.Product.id==request.product_id)
    if not product.first() or product.first().qty<request.qty:
        return {"success":False,"errMsg":"product not available try decreasing quantity"}
    amount = product.first().price*request.qty
    shipp_add = request.shipping_add
    prod_id = request.product_id
    phone_number = request.phone_number
    qnty = request.qty
    if shipp_add == "":
        shipp_add = db.query(models.Costumer).filter(models.Costumer.id==user.costumer_id).first().loc
    if phone_number==0:
        phone_number = db.query(models.Costumer).filter(models.Costumer.id==user.costumer_id).first().phone_number
    if request.cart_id != -1:
        cart = db.query(models.Cart).filter(models.Cart.id==request.cart_id)
        if (not cart.first()) or cart.first().product_id != request.product_id or cart.first().qty != request.qty:
            return {"success":False,"errMsg":"invalid id"}
        prod_id = cart.first().product_id
        qnty = cart.first().qty
        cart.delete()
    if qnty <= 0:
        return {"success":False, "errMsg":"quantity must be greater then zero"}
    order = models.Order(qty=qnty,costumer_id=user.costumer_id,product_id=prod_id,ship_add=shipp_add,amount=amount,phone_number=phone_number)
    db.add(order)
    product.update({"qty":product.first().qty-request.qty},synchronize_session=False)
    db.commit()
    db.refresh(order)
    return {"success":True, "msg":"order created","order_id":order.id}

@route.delete("/delete/{id}")
async def delete_order(id:int, db : Session = Depends(get_db),current_user : schema.User = Depends(get_current_user)):
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    order = db.query(models.Order).filter(models.Order.id==id)
    if (not user) or user.category != "customer" and user.costumer_id != order.first().costumer_id:
        return {"success":False,"errMsg":"unauthenticated"}
    product = db.query(models.Product).filter(models.Product.id==order.first().product_id)
    product.update({"qty":product.first().qty+order.first().qty},synchronize_session=False)
    order.delete()
    db.commit()
    return {"success":True,"msg":"order deleted successfully"}

@route.get("/",response_model=List[schema.OrderShow])
def all_orders(db : Session = Depends(get_db), current_user : schema.User = Depends(get_current_user)):
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    if user.category=="customer":
        orders = db.query(models.Order).filter(models.Order.costumer_id==user.costumer_id).all()
        return orders


