const express = require("express");
const router = express.Router();

const {
    createAuthor,
    getAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authorController');

router.post('/authors', createAuthor);
router.get('/authors', getAuthors);
router.get('/authors/:id', getAuthor);
router.put('/authors/:id', updateAuthor);
router.delete('/authors/:id', deleteAuthor);

module.exports = router;