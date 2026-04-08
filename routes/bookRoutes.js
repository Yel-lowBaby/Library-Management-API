const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const {
    createBook,
    getBooks,
    overdueBooks,
    getBook,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook
    
} = require('../controllers/bookController');

router.post('/books', protect, allowRoles("attendant"), createBook);
router.get('/books', protect, allowRoles("attendant"), getBooks);
router.get("/books/overdue", allowRoles("attendant"), protect, overdueBooks);
router.get('/books/:id', protect, allowRoles("attendant"), getBook);
router.put('/books/:id', protect, allowRoles("attendant"), updateBook);
router.delete('/books/:id', protect, allowRoles("attendant"), deleteBook);
router.post('/books/:id/borrow', protect, allowRoles("attendant"), borrowBook);
router.post('/books/:id/return', protect, allowRoles("attendant"), returnBook);

module.exports = router;