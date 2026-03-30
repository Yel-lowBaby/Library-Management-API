const Attendant = require('../models/attendant');

exports.createAttendant = async (req, res) => {
    try {
        const { name, staffId } = req.body;

        const attendant = new Attendant({ name, staffId });

        await attendant.save();

        return res.status(201).json({
            success: true,
            data: attendant
        });

    } catch(error) {
        return res.status(400).json({ message: error.message });
    }
};

exports.getAttendants = async (req, res) => {
    try {
        const attendants = await Attendant.find();

        return res.status(200).json({
            success: true,
            data: attendants
        });

    } catch(error) {
        return res.status(500).json({ message: error.message });
    }
};

