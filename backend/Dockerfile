# Description: Dockerfile for the backend service

# Basic image with Python 3.12
FROM python:3.12  

# Set the working directory
WORKDIR /app

# Copy the backend files
COPY main.py requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Open port 8000
EXPOSE 8000

# Run the application. Launch the FastAPI server with uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
