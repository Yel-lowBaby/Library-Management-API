const express = require("express");
const router = express.Router();

const {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    borrowBook,
    returnBook
} = require('../controllers/bookController');

router.post('/books', createBook);
router.get('/books', getBooks);
router.get('/books/:id', getBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.post('/books/:id/borrow', borrowBook);
router.post('/books/:id/return', returnBook);

module.exports = router;