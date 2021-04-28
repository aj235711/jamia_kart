from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from storage import schema,database,models
from security import oauth2

route=APIRouter(
    prefix="/admin",
    tags=["Admin"]
)

get_current_user=oauth2.get_current_user
get_db = database.get_db

@route.get("/")
async def is_admin(db: Session=Depends(get_db),current_user: schema.User=Depends(get_current_user)):
    user=db.query(models.User).filter(models.User.email==current_user.email).first()
    if user and user.category=="admin":
        return {"category":"admin","access":True}
    else:
        return {"category":user.category,"access":False}
    
