from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from storage import schema,database,models
from security import oauth2

route=APIRouter(
    prefix="/seller",
    tags=["Seller"]
)

get_curr_user=oauth2.get_current_user
get_db=database.get_db


@route.put("/{email}")
async def edit_seller(email:str,request:schema.SellerUpdate,db:Session=Depends(get_db),current_user:schema.User=Depends(get_curr_user)):
    user=db.query(models.User).filter(models.User.email==email).first()
    if user and user.email==current_user.email:
        seller=db.query(models.Seller).filter(models.Seller.id==user.seller_id)
        date=seller.first().joined
        seller.update({"loc":request.location,"joined":date})
        db.commit()
        return {"message":"seller info updated"}
