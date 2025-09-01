from flask import Flask, request, jsonify
from fake_news_model import predict_fake_news
from sentiment_analysis import analyze_sentiment
from flask_cors import CORS

app = Flask(__name__) 
CORS(app)

@app.route("/")
def home():
    return jsonify({"message": "Fake News Detector API is running!"})

@app.route("/predict", methods=['POST', 'GET'])
def predict(): 
    if request.method == "GET":
        return jsonify({"message": "Send a POST request with JSON { 'text': 'your news here' }"})

    try:
        data = request.get_json()
        news = data.get("text", "").strip()

        if not news:
            return jsonify({"error": "Please enter some text."})

        result = predict_fake_news(news)
        sentiment, polarity = analyze_sentiment(news)
        pred=" "
        if result == 0:
            pred = "Fake News"
        else:
            pred="Real News"
            
        return jsonify({
            "news": news,
            "label": pred,
            "sentiment": sentiment,
            "polarity_score": polarity
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    
if __name__ == "__main__":
    app.run(debug=True)
