const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
app.use(express.json());

const port = 3000;
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

app.post('/api/products', async (req, res) => {
    // res.send("Data Recieved");
    // console.log(req.body);
    try {
        const product = await Product.create(req.body);
        res.statusCode(201).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});