const Product = require('../models/product.model.js');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).send(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postProduct = async (req, res) => {
    // res.send("Data Recieved");
    console.log(req.body);
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, res.body);
        if (!product) {
            return res.status(404).json({ message: "Not Updated Product" });
        }
        res.status(200).json(product);
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Not Deleted Product" });
        }
        res.status(200).json({ message: "Successfully Deleted Product" });

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct,
}