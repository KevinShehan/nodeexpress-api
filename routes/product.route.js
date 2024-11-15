const express = require('express');
const router = express.router;
const Product = require('../models/product.model.js');
const {getProducts,getProduct} = require('../controllers/product.controller.js');

router.post('/', postProduct);
router.get('/',getProducts);
router.get('/:id', getProduct);

router.put('/:id', async (req, res) => {
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
});

router.delete('/:id', async (req, res) => {
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
});

module.exports = router;