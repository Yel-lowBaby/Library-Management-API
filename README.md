📚 School Library Management API
🚀 Overview

This is a RESTful API for managing a school library system.
It allows management of authors, books, students, library attendants, and book borrowing/returns.

🛠 Tech Stack
Node.js
Express.js
MongoDB (Mongoose)
📁 Project Structure
/models
/controllers
/routes
/config
server.js
⚙️ Setup Instructions
Clone the repository
git clone <your-repo-link>
Install dependencies
npm install
Create a .env file and add:
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the server
npm run dev
📌 API ENDPOINTS
👤 Authors
POST /api/authors
GET /api/authors
GET /api/authors/
PUT /api/authors/
DELETE /api/authors/
📚 Books
POST /api/books
GET /api/books
GET /api/books/
PUT /api/books/
DELETE /api/books/
🎓 Students
POST /api/students
GET /api/students
GET /api/students/
🧑‍💼 Attendants
POST /api/attendants
GET /api/attendants
📤 Borrow Book

POST /api/books//borrow

Body:
{
"studentId": "xxx",
"attendantId": "xxx",
"returnDate": "YYYY-MM-DD"
}

🔁 Return Book

POST /api/books//return

⚡ Special Features
Book status tracking (IN / OUT)
Author relationships
Borrowing system with validation
Automatic population of:
Authors
Student
Attendant
👨‍💻 Author

Olayinka Adedapo Abioye