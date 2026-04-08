const mongoose = require("mongoose");

const attendantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    staffId: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["attendant"],
        default: "attendant"
    }
}, {
    timestamps: true
});


module.exports = mongoose.model("Attendant", attendantSchema);