from flask import Flask, request, jsonify
from fake_news_model import predict_fake_news
from sentiment_analysis import analyze_sentiment
from flask_cors import CORS
import requests
from models import create_user, authenticate_user
from pymongo import MongoClient
from bson import ObjectId
from flask_bcrypt import Bcrypt



app = Flask(__name__) 
CORS(app)
bcrypt = Bcrypt(app)
# ---- MongoDB Connection ----
client = MongoClient("mongodb://localhost:27017/")  # Change if using MongoDB Atlas
db = client["fake_news_db"]  # Database
users = db["users"]  # Collection

# <-------------------Register verification--------------->
@app.route("/api/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if users.find_one({"username": username}):
        return jsonify({"message": "User already exists"}), 400

    hashed_pw = bcrypt.generate_password_hash(password).decode("utf-8")

    user_id = users.insert_one({
        "username": username,
        "email": email,
        "password": hashed_pw
    }).inserted_id

    return jsonify({"message": "User registered successfully", "id": str(user_id)}), 201


# <-----------------Login verification--------------->

@app.route("/api/login", methods=["POST"])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    user = users.find_one({"username": username})
    if not user:
        return jsonify({"message": "User not found"}), 404

    if bcrypt.check_password_hash(user["password"], password):
        return jsonify({
            "message": "Login successful",
            "user": {
                "id": str(user["_id"]),
                "username": user["username"],
                "email": user["email"]
            }
        }), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401


# ---- NewsAPI function ----
def verify_with_newsapi(query):
    api_key = "0a5970c7d8a3474e8989b0df83ae0997"   # Replace with your API key
    # Use only first few words for better search
    keywords = " ".join(query.split()[:6])
    url = f"https://newsapi.org/v2/everything?q={keywords}&language=en&sortBy=relevancy&apiKey={api_key}"
    try:
        response = requests.get(url)
        if response.status_code == 200:
            articles = response.json().get("articles", [])
            if articles:
                # Return top 3 related sources
                results = []
                for art in articles[:3]:
                    results.append({
                        "source": art["source"]["name"],
                        "title": art["title"],
                        "url": art["url"]
                    })
                return {"fact": f"Found {len(articles)} related articles.", "articles": results}
            else:
                return {"fact": "No matching articles found", "articles": []}
        return {"fact": "Error contacting NewsAPI", "articles": []}
    except Exception as e:
        return {"fact": f"NewsAPI error: {e}", "articles": []}


# @app.route("/")
# def home():
#     return jsonify({"message": "Fake News Detector API is running!"})


@app.route("/predict", methods=['POST', 'GET'])
def predict(): 
    if request.method == "GET":
        return jsonify({"message": "Send a POST request with JSON { 'text': 'your news here' }"})

    try:
        data = request.get_json()
        news = data.get("text", "").strip()

        if not news:
            return jsonify({"error": "Please enter some text."})

        # ---- ML Prediction ----
        result = predict_fake_news(news)
        pred = "Real News" if result == 1 else "Fake News"

        # ---- Sentiment Analysis ----
        sentiment, polarity = analyze_sentiment(news)

        # ---- NewsAPI Verification ----
        fact_check = verify_with_newsapi(news)

        return jsonify({
            "news": news,
            "label": pred,
            "sentiment": sentiment,
            "polarity_score": polarity,
            "fact_check": fact_check["fact"],
            "fact_check_articles": fact_check["articles"]
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

if __name__ == "__main__":
    app.run(debug=True)
