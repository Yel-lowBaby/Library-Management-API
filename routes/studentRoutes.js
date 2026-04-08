const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { allowRoles } = require("../middleware/roleMiddleware");

const {
    createStudent,
    getStudents,
    getStudent
} = require('../controllers/studentController');

router.post('/students', protect, allowRoles("attendant"), createStudent);
router.get('/students', protect, allowRoles("attendant"), getStudents);
router.get('/students/:id', protect, allowRoles("attendant"), getStudent);

module.exports = router;