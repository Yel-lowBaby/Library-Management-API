const jwt = require("jsonwebtoken");
const Attendant = require("../models/attendant");

exports.protect = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Not authorized, no token" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const attendant = await Attendant.findById(decoded.id).select("-password");

        if (!attendant) {
            return res.status(401).json({ message: "User not found" });
        }

        req.user = attendant;

        next();

    } catch(error) {
        return res.status(401).json({ message: "Not found" });
    }
};