require('dotenv').config();
const cors = require('cors');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(cors({
    origin:'http://localhost:5173',
    credentials: true
}))

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to Workly!"});
})

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => {
        console.log("Connected to MongoDB!")
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(process.env.PORT, () => {
    console.log("Workly is listening on port", process.env.PORT)
})

