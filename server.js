const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI) 

.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const authorRoutes = require('./routes/authorRoutes');
const studentRoutes = require('./routes/studentRoutes');
const attendantRoutes = require('./routes/attendantRoutes');
const bookRoutes = require('./routes/bookRoutes');

app.use('/api', authorRoutes);
app.use('/api', studentRoutes);
app.use('/api', attendantRoutes);
app.use('/api', bookRoutes);

app.get('/', (req, res) => { 
    res.send("Library API is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



