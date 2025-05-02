from bson import ObjectId
from app.database import db

def user_helper(user):
    return {
        'id': str(user['_id']),
        'firstName': user['firstName'],
        'lastName': user['lastName'],
        'email': user['email'],
    }

async def create_user(user):
    res = await db.users.insert_one(user)
    user['_id'] = res.inserted_id
    return user_helper(user)

async def get_users():
    users = []
    async for u in db.users.find():
        users.append(user_helper(u))
    return users

async def get_user(user_id):
    user = await db.users.find_one({'_id': ObjectId(user_id)})
    if user:
        return user_helper(user)
    return None

async def update_user(user_id, data):
    await db.users.update_one({'_id': ObjectId(user_id)}, {'$set': data})
    return await get_user(user_id)

async def delete_user(user_id):
    await db.users.delete_one({'_id': ObjectId(user_id)})
    return {'message': 'Deleted'}