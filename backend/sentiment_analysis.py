import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer

nltk.download('vader_lexicon')

sid = SentimentIntensityAnalyzer()

def analyze_sentiment(text):
    scores = sid.polarity_scores(text)
    compound = scores['compound']
    
    if compound > 0.2:
        return "Positive",compound
    elif compound < -0.2:
        return "Negative",compound
    else:
        return "Normal",compound