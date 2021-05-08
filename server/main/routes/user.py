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
    if cat=="seller":
        new_seller = models.Seller(loc=request.location,joined=date.today(),phone_number=request.phone_number)
        db.add(new_seller)
        db.commit()
        db.refresh(new_seller)
        new_user = models.User(email=request.email,name=request.name,
            password=hashing.Hash.bcrypt(request.password),category=cat,seller_id=new_seller.id)
    elif cat=="customer":
        new_costumer = models.Costumer(loc=request.location,joined=date.today(),phone_number=request.phone_number)
        db.add(new_costumer)
        db.commit()
        db.refresh(new_costumer)
        new_user = models.User(email=request.email,name=request.name,
            password=hashing.Hash.bcrypt(request.password),category=cat,costumer_id=new_costumer.id)
    else:
        if cat != "admin":
            return {"success":False,"errMsg": "please provide a valid category"}
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {"success":True,"Msg": "user created","category":request.category}

@route.get("/",response_model=schema.UserShow)
async def get_curr_user(db : Session = Depends(get_db),current_user:schema.User=Depends(get_current_user)):
    user = db.query(models.User).filter(models.User.email==current_user.email).first()
    return user

@route.get("/all",response_model=List[schema.UserShow])
async def get_all_users(db : Session = Depends(get_db),current_user:schema.User=Depends(get_current_user)):
    """
    get all user
    """
    users = db.query(models.User).all()
    return users

@route.put("/pass/{email}")
def password_update(email : str, request : schema.PasswordUpdate, db : Session = Depends(get_db)):
    """
    update password
    """
    user = db.query(models.User).filter(models.User.email==email)
    if not user : 
        return {"success":False,"Msg":"user not found"}
    user.update({"password":hashing.Hash.bcrypt(request.password)},synchronize_session=False)
    db.commit()
    return {"success":True,"Msg":"password updated"}


@route.put('/{email}', response_model=schema.UserShow)
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
    phone_number = request.phone_number
    loc = request.loc
    if user.first().category == "seller":
        seller = db.query(models.Seller).filter(models.Seller.id== user.first().seller_id)
        if loc=="":
            loc = seller.first().loc
        if phone_number==0:
            phone_number = seller.first().phone_number
        seller.update({"loc":loc,"phone_number":phone_number},synchronize_session=False)
    elif user.first().category == "customer":
        costumer = db.query(models.Costumer).filter(models.Costumer.id== user.first().costumer_id)
        if loc=="":
            loc = costumer.first().loc
        if phone_number==0:
            phone_number = costumer.first().phone_number
        costumer.update({"loc":loc,"phone_number":phone_number},synchronize_session=False)
    user.update({'name':request.name},synchronize_session=False)
    db.commit()
    return user.first()




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
    if user.first().category=="seller":
        seller=db.query(models.Seller).filter(models.Seller.id==user.first().seller_id)
        seller.delete(synchronize_session=False)
    elif user.first().category=="costumer":
        costumer=db.query(models.Costumer).filter(models.Seller.id==user.first().costumer_id)
        costumer.delete(synchronize_session=False)
    user.delete(synchronize_session=False)
    db.commit()
    return Response(status_code=status.HTTP_204_NO_CONTENT)
    return {"access_token": "", "token_type": "bearer"}
