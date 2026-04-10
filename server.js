require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require('./configs/db');
connectDB();

app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const authorRoutes = require('./routes/authorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const attendantRoutes = require('./routes/attendantRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use('/api', authRoutes);
app.use('/api', authorRoutes);
app.use('/api', studentRoutes);
app.use('/api', attendantRoutes);
app.use('/api', bookRoutes);

app.get('/', (req, res) => { 
    res.send("Library API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



