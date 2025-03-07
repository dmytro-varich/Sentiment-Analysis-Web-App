# 🙂 Sentiment Analysis Web App
This project is a **web application for sentiment analysis** of user input sentences. It is part of the **Fundamentals of Cloud Technologies course** assignment, where the task was to deploy a local web application in Docker, consisting of at least two services (containers). These services must run on separate ports, be deployed in different containers, and exchange data between them. The backend service performs sentiment analysis on user-submitted sentences, while the frontend provides a user interface to interact with the web application.

![apple-touch-icon](https://github.com/user-attachments/assets/877067eb-ca4d-496f-b68a-3c84698a8217) 

# 🗂️ Project Structure

```
sentiment-analysis-web-app/
│── backend/ 
│   ├── main.py            # Code for the web application (Backend)
│   ├── requirements.txt   # Required dependencies 
│   ├── Dockerfile         # Docker image for the backend service
│   ├── .dockerignore      # Specifies ignored files for the backend 
│── frontend/ 
│   ├── favicon/           # Favicon images for the frontend
│   ├── index.html         # HTML file for the user interface
│   ├── style.css          # CSS file for styling the frontend
│   ├── script.js          # JavaScript to handle frontend logic
│   ├── Dockerfile         # Docker image for Nginx (Frontend)
│   ├── .dockerignore      # Specifies ignored files for the frontend
│── docker-compose.yml     # Docker Compose file for orchestrating containers
│── start-app.sh           # Script to start the application
│── end-app.sh             # Script to stop the application
│── README.md              # Project documentation
```

# 🛠️ Tech Stack:
- **Frontend:** `HTML`, `CSS`, `JavaScript`.
- **Backend:** `Python`, `FastAPI`, `NLTK`, `Uvicorn`. 
- **Deployment:** `Docker`, `Docker Compose`.

# 🎥 Demo Video

https://github.com/user-attachments/assets/0012e651-1977-484d-99e3-fcdbaac4224b

# 🐳 Docker Usage 

1. Navigate to the project's root directory using the command:  
   ```sh
   cd sentiment-analysis-web-app
   ```

2. To start the backend and frontend containers, run the startup script:  
   ```sh
   ./start-app.sh
   ```

3. Verify that both containers are running by executing:  
   ```sh
   docker container ls
   ```
   You should see two containers — one for the backend and one for the frontend:  
   ```plaintext
   CONTAINER ID   IMAGE                                 COMMAND                  CREATED              STATUS              PORTS                    NAMES
   956badf9265f   sentiment-analysis-web-app-frontend   "/docker-entrypoint.…"   About a minute ago   Up About a minute   0.0.0.0:8080->80/tcp     sentiment-analysis-web-app-frontend-1
   a7dc3ea44d15   sentiment-analysis-web-app-backend    "uvicorn main:app --…"   About a minute ago   Up About a minute   0.0.0.0:8000->8000/tcp   sentiment-analysis-web-app-backend-1
   ```

4. Access the application in a web browser:  
   - **Frontend:** [http://127.0.0.1:8080](http://127.0.0.1:8080) or [http://localhost:8080](http://localhost:8080)  
   - **Backend API:** [http://127.0.0.1:8000/analyze](http://127.0.0.1:8000/analyze)  

5. To enter a running container, use:  
   ```sh
   docker exec -it <container-name> /bin/sh
   ```

6. To stop and remove the containers, run:  
   ```sh
   ./end-app.sh
   ```
# 🌐 Deployment
For demonstration purposes, the web application has been deployed for free on the Railway server, without the need to run the project locally or use Docker Compose. You can access it at the following URL: [https://sentiment-analysis-web-app-production.up.railway.app/](https://sentiment-analysis-web-app-production.up.railway.app/). Please note that this deployment will be available for an indefinite period, subject to Railway's free-tier limits.

# 🧑🏻 Author
Dmytro Varich is the creator of this application. You can learn more about his projects on his personal [Telegram channel](https://t.me/varich_channel), as well as connect with him via LinkedIn ([dmytro-varich](https://www.linkedin.com/in/dmytro-varich/)) and email (varich.it@gmail.com).
