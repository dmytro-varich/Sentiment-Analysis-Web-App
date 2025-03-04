# Description: Dockerfile for the frontend

# Using Nginx as the web server
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the frontend files
COPY . /usr/share/nginx/html/

# Open port 80
EXPOSE 80