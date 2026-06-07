# 📝 Task Tracker - MERN Stack (Vanilla JS Frontend)

A full-stack, secure task management application built from scratch. This project allows users to create accounts, log in securely using JSON Web Tokens (JWT), and manage their personal tasks. The backend ensures that users can only access and modify their own data.

### 🔗 Live Demo: [Insert Your Netlify Link Here]

## ✨ Features

* **User Authentication:** Secure registration and login system with password hashing (bcryptjs).
* **Authorization (JWT):** Protected API routes ensuring users can only see and delete their own tasks.
* **CRUD Operations:** Create, Read, and Delete tasks seamlessly.
* **Persistent Storage:** MongoDB database integration for reliable data handling.
* **Clean UI:** A lightweight, responsive, and minimalist user interface.

## 🛠️ Technologies Used

**Frontend:**
* HTML5 & CSS3
* Vanilla JavaScript (Fetch API for HTTP requests)

**Backend:**
* Node.js
* Express.js
* MongoDB & Mongoose
* JSON Web Tokens (JWT) for Authentication
* bcryptjs for Password Hashing
* CORS & dotenv

## 📁 Project Structure

\`\`\`
task-tracker/
├── backend/
│   ├── config/       # Database connection logic
│   ├── controllers/  # API endpoint logic (Tasks & Users)
│   ├── middleware/   # Custom JWT authentication middleware
│   ├── models/       # Mongoose Schemas (User.js, Task.js)
│   ├── routes/       # Express route definitions
│   └── server.js     # Main application entry point
└── frontend/
    ├── css/          # Stylesheets
    ├── js/           # Client-side logic (app.js, auth.js)
    ├── index.html    # Main dashboard UI
    └── login.html    # Authentication UI
\`\`\`

## 🚀 Getting Started (Local Development)

If you want to run this project locally on your machine, follow these steps:

### 1. Clone the repository
\`\`\`bash
git clone https://github.com/your-username/task-tracker.git
cd task-tracker
\`\`\`

### 2. Install Dependencies
\`\`\`bash
npm install
\`\`\`

### 3. Environment Variables
Create a `.env` file in the root directory and add your specific secrets:
\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key_here
\`\`\`

### 4. Run the Backend Server
\`\`\`bash
npm run dev
\`\`\`
The backend will start running on `http://localhost:5000`.

### 5. Run the Frontend
Open the `frontend/login.html` file using the **Live Server** extension in VS Code to interact with the application.

## 🔌 API Endpoints

### Users
* `POST /api/users/register` - Register a new user
* `POST /api/users/login` - Authenticate a user and get token

### Tasks (Requires Bearer Token)
* `GET /api/tasks` - Get all tasks for the logged-in user
* `POST /api/tasks` - Create a new task
* `DELETE /api/tasks/:id` - Delete a specific task

---
**Developed with ❤️ by Rishabh Singh**
