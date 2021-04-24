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

