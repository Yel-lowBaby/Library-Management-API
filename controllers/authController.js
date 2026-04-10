const Attendant = require('../models/attendant');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, staffId, email, password } = req.body

        const existing = await Attendant.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Attendant already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const attendant = await Attendant.create({
            name,
            staffId,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "Attendant registered successfully",
            data: attendant
        });

    } catch(error) {
        return res.status(500).json({ message: error.message});
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const attendant = await Attendant.findOne({ email });
            if (!attendant) {
                return res.status(404).json({ message: "Attendant not found" });
            }

        const isMatch = await bcrypt.compare(password, attendant.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: attendant._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login successful",
            token
        });
    

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};