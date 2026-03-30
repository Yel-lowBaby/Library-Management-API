const express = require("express");
const router = express.Router();

const {
    createAttendant,
    getAttendants
} = require('../controllers/attendantController');

router.post('/attendants', createAttendant);
router.get('/attendants', getAttendants)

module.exports = router;