📚 Library Management System API

A robust backend API for managing a library system, built with Node.js, Express, and MongoDB. This system supports book management, student records, attendants, borrowing logic, authentication, and overdue tracking.

⸻

🚀 Features

📖 Book Management
	•	Add new books (Protected)
	•	Fetch all books
	•	Fetch single book by ID
	•	Track book availability (IN / OUT)

👨‍🎓 Student Management
	•	Add students (Protected)
	•	Fetch student records

✍️ Author Management
	•	Add authors (Protected)
	•	Manage author data

🔄 Borrowing System
	•	Borrow books
	•	Assign:
	•	Student
	•	Attendant
	•	Return date
	•	Prevent borrowing already borrowed books

⏰ Overdue Detection
	•	Dedicated endpoint to fetch overdue books
	•	Logic:
	•	Book must be OUT
	•	returnDate must be earlier than current date

🔐 Authentication (JWT)
	•	Attendant registration with hashed passwords
	•	Attendant login with JWT token
	•	Secure authentication using:
	•	bcryptjs
	•	jsonwebtoken

🛡️ Authorization
	•	Protected routes using middleware
	•	Only authenticated attendants can:
	•	Add books
	•	Add students
	•	Add authors

🧱 Role-Based Access Control
	•	Attendants assigned roles
	•	Middleware ensures only authorized roles access specific routes

🛠️ Tech Stack
	•	Node.js
	•	Express.js
	•	MongoDB
	•	Mongoose
	•	bcryptjs
	•	jsonwebtoken

📁 Project Structure
project/
├── controllers/
│   ├── authController.js
│   ├── bookController.js
│   ├── studentController.js
│   ├── authorController.js
│   └── overdueController.js
│
├── models/
│   ├── bookModel.js
│   ├── studentModel.js
│   ├── authorModel.js
│   └── attendantModel.js
│
├── routes/
│   ├── authRoutes.js
│   ├── bookRoutes.js
│   ├── studentRoutes.js
│   └── authorRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
│
├── server.js
└── package.json

🔐 Authentication Endpoints

Register Attendant
POST /api/register

Login Attendant
POST /api/login

📚 Book Endpoints

Get All Books
GET /books

Get Single Book
GET /books/:id

Add Book (Protected)
POST /books
Authorization: Bearer <token>

🔄 Borrow Book
POST /books/:id/borrow

⏰ Overdue Books
GET /books/overdue

🛡️ Protected Routes
Authorization: Bearer <JWT Token>

⚙️ Installation
git clone (https://github.com/Yel-lowBaby/Library-Management-API)
cd project
npm install
npm run dev

🗝️Key Features
	•	Pagination to get books
    •	Search by title or author
	•	Overdue books check 
	•	Validation using middleware 
	•	No duplicate ISBN

💡 Future Improvements
	•	Student authentication system

👨‍💻 Author

Built by Olayinka Adedapo Abioye