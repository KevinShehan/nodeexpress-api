const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


mongoose.connect('mongodb://localhost:27017/nodeapi')
    .then(() => {
        console.log("MongoDB Connected Succesfully");
    })
    .catch(() => {
        console.log("MongoDB Connection Failed");
    })

app.get('/', (req, res) => {
    res.send("Hello world! from NODE API");
});

