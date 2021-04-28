from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from datetime import timedelta
from storage import database,models
from security import token
import hashing as hashing
route=APIRouter(
    tags=["Authentication"],
    prefix="/login"
)

get_db=database.get_db

@route.post("/")
async def login(request: OAuth2PasswordRequestForm=Depends(),db: Session=Depends(get_db)):
    user=db.query(models.User).filter(models.User.email==request.username).first()
    if not user or not hashing.Hash.verify(user.password, request.password):
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
            detail="Invalid Credentials")
    access_token_expires = timedelta(minutes=token.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = token.create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "Bearer"}

