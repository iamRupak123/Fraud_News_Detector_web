from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb://localhost:27017/")  # change if cloud DB
db = client["fake_news_db"]
users_collection = db["users"]

def create_user(username, email, password):
    if users_collection.find_one({"email": email}):
        return {"error": "User already exists"}

    hashed_pw = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
    users_collection.insert_one({
        "username": username,
        "email": email,
        "password": hashed_pw
    })
    return {"message": "User registered successfully"}

def authenticate_user(email, password):
    user = users_collection.find_one({"email": email})
    if not user:
        return None
    if bcrypt.checkpw(password.encode("utf-8"), user["password"]):
        return {"username": user["username"], "email": user["email"]}
    return None
