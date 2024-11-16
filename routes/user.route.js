const express = require('express');
const router = express.Router();
const Product = require('../models/user.model.js');
const { postUser } = require('../controllers/product.controller.js');
// Get all users


router.post('/', postUser);

module.exports = router;