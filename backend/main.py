from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
from fastapi.middleware.cors import CORSMiddleware

# Download the required sentiment analysis lexicon
nltk.download("vader_lexicon")
sia = SentimentIntensityAnalyzer()

# Initialize the FastAPI application
app = FastAPI(title="Sentiment Analysis API", version="0.1")

# Define allowed origins for CORS (Cross-Origin Resource Sharing)
origins = [
    "http://localhost:8080",  # Local frontend
    "http://127.0.0.1:8080",  # Alternative local address
    "http://frontend:8080",   # Docker frontend 
    "https://sentiment-analysis-web-app-production.up.railway.app" # Railway frontend URL
]

# Enable CORS middleware to allow frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow specified origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Define the request body model
class TextRequest(BaseModel):
    text: str  # The text input for sentiment analysis

# Define the sentiment analysis endpoint
@app.post("/analyze")
async def sentiment_analysis(request: TextRequest):
    if not request.text:
        raise HTTPException(status_code=400, detail="Text is required")  # Handle empty input
    
    # Perform sentiment analysis
    scores = sia.polarity_scores(request.text)

    # Determine the sentiment category based on the compound score
    if scores["compound"] >= 0.05:
        sentiment = "positive"
    elif scores["compound"] <= -0.05:
        sentiment = "negative"
    else: 
        sentiment = "neutral"
    
    # Return the analysis result
    return {
        "text": request.text,
        "sentiment": sentiment,
        "scores": scores
    }