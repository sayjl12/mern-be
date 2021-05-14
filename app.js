require("dotenv").config();
const express = require('express'); //framework
const app = express();
const mongoose = require("mongoose"); //used to connect MongoDB
var cors = require('cors');
// routes
const books = require('./routes/api/book');

app.get('/', (req, res) => res.send('Hello world!'));

const APP_PORT = process.env.APP_PORT || 3000;

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

// use Routes
app.use('/api/book', books);

let dbLink = process.env.DB_CONNECTION

//connect database
mongoose.connect(
    dbLink,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log("MongoDB is Connected...")
);

app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`));