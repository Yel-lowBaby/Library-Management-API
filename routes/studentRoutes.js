const express = require("express");
const router = express.Router();

const {
    createStudent,
    getStudents,
    getStudent
} = require('../controllers/studentController');

router.post('/students', createStudent);
router.get('/students', getStudents);
router.get('/students/:id', getStudent);

module.exports = router;