from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List
import storage.schema as schema
import storage.database as database
import storage.models as models
import routes.user as user

app = FastAPI()

app.include_router(user.route)


models.Base.metadata.create_all(bind=database.engine)