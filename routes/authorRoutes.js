const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const {
    createAuthor,
    getAuthors,
    getAuthor,
    updateAuthor,
    deleteAuthor
} = require('../controllers/authorController');

router.post('/authors', protect, allowRoles("attendant"), createAuthor);
router.get('/authors', protect, allowRoles("attendant"), getAuthors);
router.get('/authors/:id', protect, allowRoles("attendant"), getAuthor);
router.put('/authors/:id', protect, allowRoles("attendant"), updateAuthor);
router.delete('/authors/:id', protect, allowRoles("attendant"), deleteAuthor);

module.exports = router;