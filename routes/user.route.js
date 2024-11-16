const express = require('express');
const router = express.Router();
const User = require('../models/user.model.js');
const { postUser } = require('../controllers/user.controller.js');
// Get all users


router.post('/', postUser);

module.exports = router;