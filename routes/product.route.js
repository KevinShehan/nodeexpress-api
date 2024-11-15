const express = require('express');
const router = express.router;
const Product = require('../models/product.model.js');
const {getProducts,getProduct} = require('../controllers/product.controller.js');

router.post('/', postProduct);
router.get('/',getProducts);
router.get('/:id', getProduct);
router.put('/:id',);

router.delete('/:id', );

module.exports = router;