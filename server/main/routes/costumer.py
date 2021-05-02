from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from storage import schema,database,models
from security import oauth2

route=APIRouter(
    prefix="/costumer",
    tags=["Costumer"]
)

get_curr_user=oauth2.get_current_user
get_db=database.get_db

@route.put("/{email}")
async def edit_costumer(email:str,request:schema.SellerUpdate,db:Session=Depends(get_db),current_user:schema.User=Depends(get_curr_user)):
    user=db.query(models.User).filter(models.User.email==email).first()
    if user and user.email==current_user.email:
        costumer=db.query(models.Costumer).filter(models.Costumer.id==user.costumer_id)
        phone_number = request.phone_number
        loc = request.loc
        if loc=="":
            loc = costumer.first().loc
        if phone_number==0:
            phone_number = costumer.first().phone_number
        costumer.update({"loc":loc,"phone_number":phone_number},synchronize_session=False)
        db.commit()
        return {"message":"costumer info updated"}
