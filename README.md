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
	•	dotenv

📁 Project Structure
library-api/
│
├── config/
│   └── db.js
│
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
├── .env
├── .gitignore
├── server.js
├── package.json
└── README.md

⚙️ Installation & Setup

1️⃣ Clone the repository
git clone https://github.com/Yel-lowBaby/Library-Management-API.git
cd notes-api

2️⃣ Install dependencies
npm install

3️⃣ Create .env file
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/notesDB
JWT_SECRET=your_secret_key

4️⃣ Run the server
npm run dev

🔐 Authentication

All protected routes require a Bearer token.

Header format:
Authorization: Bearer YOUR_TOKEN

📬 API Endpoints

🔑 Auth Routes

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

🔒 Authorization
	•	Attendants only can modify resources
	•	Unauthorized actions return a 403 error

⚠️ Important Notes
	•	Do NOT commit your .env file
	•	Ensure MongoDB server is running
	•	Always include Authorization header for protected routes

🗝️Key Features
	•	Pagination to get books
    •	Search by title or author
	•	Overdue books check 
	•	Validation using middleware 
	•	No duplicate ISBN

💡 Future Improvements
	•	Student authentication system

👨‍💻 Author
Olayinka Adedapo Abioye