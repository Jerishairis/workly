require('dotenv').config();

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({mssg: "Welcome to Workly!"});
})

app.listen(process.env.PORT, () => {
    console.log("Workly is listening on port", process.env.PORT)
})

