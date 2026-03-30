const Student = require('../models/student');

exports.createStudent = async (req, res) => {
    try {
        const { name, email, studentId } = req.body;

        const student = new Student({ name, email, studentId });

        await student.save();

        return res.status(201).json({
            success: true,
            data: student
        });

    } catch(error) {
        return res.status(400).json({ message: error.message });
    }
};

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();

    return res.status(200).json({
        success: true,
        data: students
    });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

    if (!student) {
        return res.status(404).json({ message: "Student not found"});
    }

    return res.status(200).json({
        success: true,
        data: student
    })

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

