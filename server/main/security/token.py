from typing import FrozenSet, Optional
from datetime import datetime, timedelta
from jose import JWTError, jwt
from storage import schema

SECRET_KEY="8w84tpoejgr(*&^%dsg\[rfo[pdf3pJHK(&JKPYkj#UIlwkf;ldfas+-as8HGIJF#@rozenSetd"
ALGORITHM="HS256"
ACCESS_TOKEN_EXPIRE_MINUTES=12000000

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def verify_token(token: str,credentials_exception):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        email: str = payload.get("sub")
        if email is None:
            raise credentials_exception
        token_data = schema.TokenData(email=email)
        return token_data
    except JWTError:
        raise credentials_exception
