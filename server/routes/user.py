from datetime import date
from fastapi import APIRouter, Depends, HTTPException, status, Response
from sqlalchemy.orm import Session
from typing import List
from storage import schema,database,models
from security import oauth2
import hashing as hashing

route=APIRouter(
    prefix="/user",
    tags=["User"]
)

get_current_user=oauth2.get_current_user
get_db = database.get_db

@route.post("/")
async def create_users(request : schema.UserCreate, db : Session = Depends(get_db)):
    """
    creates user and seller or Costumee
    """
    cat=request.category.lower()
    user = db.query(models.User).filter(models.User.email==request.email)
    if user.first():
        return {"success":False,"errMsg": "User already exist"}
    new_user = models.User(email=request.email,name=request.name,password=hashing.Hash.bcrypt(request.password),category=cat)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    if cat=="seller":
        new_seller = models.Seller(loc=request.location,joined=date.today(),user_id=request.email)
        db.add(new_seller)
        db.commit()
        db.refresh(new_seller)
    elif cat=="customer":
        new_costumer = models.Costumer(loc=request.location,joined=date.today(),user_id=request.email)
        db.add(new_costumer)
        db.commit()
        db.refresh(new_costumer)
    else:
        if cat != "admin":
            return {"success":False,"errMsg": "please provide a valid category"}

    return {"success":True,"Msg": "user created","category":request.category}

@route.get("/",response_model=schema.UserShow)
async def get_curr_user(current_user:schema.User=Depends(get_current_user)):
    return {"user":current_user}

@route.get("/all",response_model=List[schema.UserShow])
async def get_all_users(db : Session = Depends(get_db),current_user:schema.User=Depends(get_current_user)):
    """
    get all user
    """
    users = db.query(models.User).all()
    return users

@route.get("/{email}",response_model=schema.UserShow)
async def get_user(email:str,db : Session = Depends(get_db),current_user:schema.User=Depends(get_current_user)):
    """
    get single user
    """
    user=db.query(models.User).filter(models.User.email==email).first()
    return user



@route.put('/{email}')
async def update_user(email:str, request : schema.UserUpdate, db : Session=Depends(get_db),current_user:schema.User=Depends(get_current_user)):
    """
    edit user details, must be available to user loggedin with same id
    """
    user=db.query(models.User).filter(models.User.email==email)
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
            detail="user not found")
    if user.first().email != current_user.email:
        raise HTTPException(status_code=403,
            detail="unauthenticated")
    user.update({'name':request.name,'password':hashing.Hash.bcrypt(request.password),'category':request.category},synchronize_session=False)
    db.commit()
    return {"message":f"updated id associated to {email}"}

@route.delete('/{email}')
async def delete_user(email:str, pswd:str, db: Session=Depends(get_db),current_user:schema.User=Depends(get_current_user)):
    """
    deletes current user, must be available to user loggedin with same id
    """
    user=db.query(models.User).filter(models.User.email == email)
    if not user.first():
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
            detail="user not found")
    elif not hashing.Hash.verify(user.first().password,pswd) or user.first().email != current_user.email:
        raise HTTPException(status_code=403,
            detail="unauthenticated")
    user.delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
    return {"access_token": "", "token_type": "bearer"}
