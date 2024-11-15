const express = require('express');
const router = express.Router();
const Product = require('../models/product.model.js');
const { getProducts, getProduct, postProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

router.post('/', postProduct);
router.get('/', getProducts);
router.get('/:id', getProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;