from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from app.models import User
from app import crud

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/users")
async def create(user: User):
    return await crud.create_user(user.dict())

@app.get("/api/users")
async def read_all():
    return await crud.get_users()

@app.get("/api/users/{user_id}")
async def read_one(user_id: str):
    user = await crud.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@app.put("/api/users/{user_id}")
async def update(user_id: str, user: User):
    return await crud.update_user(user_id, user.dict())

@app.delete("/api/users/{user_id}")
async def delete(user_id: str):
    return await crud.delete_user(user_id)