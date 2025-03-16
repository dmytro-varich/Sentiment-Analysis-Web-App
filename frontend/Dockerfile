# Description: Dockerfile for the frontend

# Using Nginx as the web server
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static files
RUN rm -rf ./*

# Copy the frontend files
COPY . /usr/share/nginx/html/

# Install gettext-base
RUN apt-get update && apt-get install -y gettext-base

# Replace the environment variables in the index.html file
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/index.html > /usr/share/nginx/html/index.html.tmp && mv /usr/share/nginx/html/index.html.tmp /usr/share/nginx/html/index.html && exec nginx -g 'daemon off;'"]

# Open port 80
EXPOSE 80