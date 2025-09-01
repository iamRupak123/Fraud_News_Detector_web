import pickle
# Load vectorizer + model separately
with open("trained_model1.pkl", "rb") as f:
    vectorizer, model = pickle.load(f)

def predict_fake_news(news):
    transformed = vectorizer.transform([news])
    result = model.predict(transformed)[0]
    return result