import uvicorn
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from typing import List
from starlette.middleware.cors import CORSMiddleware
import storage.schema as schema
import storage.database as database
import storage.models as models
from routes import  user, authentication
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(authentication.route)
app.include_router(user.route)

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],)

models.Base.metadata.create_all(bind=database.engine)

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)