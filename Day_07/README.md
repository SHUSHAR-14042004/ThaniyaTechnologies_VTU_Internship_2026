# 🚀 Simple REST API using Node.js & Express

## 📌 Project Description
This project is a basic REST API built using Node.js and Express.js.
It demonstrates CRUD (Create, Read, Update, Delete) operations using in-memory data.
The API can be tested using Postman or any API testing tool.

---

## 🛠️ Technologies Used
- Node.js
- Express.js
- Postman
- Git & GitHub

---

## 📂 Project Structure

project-folder/
│
├── server.js
├── package.json
├── .gitignore
└── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
git clone <your-repository-link>
cd <project-folder>

### 2️⃣ Install Dependencies
npm install

### 3️⃣ Run the Server
node server.js

Server will start at:
http://localhost:3000

---

## 🔥 API Endpoints

### 📌 Get All Users
GET /users

### 📌 Get Single User
GET /users/:id

### 📌 Create User
POST /users

Body (JSON):
{
  "name": "Rahul"
}

### 📌 Update User
PUT /users/:id

Body (JSON):
{
  "name": "Updated Name"
}

### 📌 Delete User
DELETE /users/:id

---

## 📊 Features
✔ RESTful API structure  
✔ CRUD operations  
✔ JSON data handling  
✔ Route parameters  
✔ Proper HTTP status codes  

---

## 🎯 Learning Outcomes
- Understanding REST API architecture  
- Working with Express routing  
- Handling JSON requests & responses  
- Implementing CRUD operations  
- Testing APIs using Postman  

---

## 📌 Future Improvements
- Connect with MySQL / MongoDB  
- Add MVC folder structure  
- Add authentication (JWT)  
- Deploy to cloud (Render / Railway / AWS)

---

## 👨‍💻 Author
Shushar Kulal