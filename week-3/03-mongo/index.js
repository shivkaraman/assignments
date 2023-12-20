const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

//Ruters
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use('/admin', adminRouter);
app.use('/users', userRouter);

// Connect to MongoDB
const PORT = process.env.PORT_NO || 3000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
