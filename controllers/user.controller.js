const User = require('../models/user.model.js');
const bcrypt = require('bcrypt'); // Ensure bcrypt is required

const postUser = async (req, res) => {
    try {
        const saltRounds = 10;

        // Hash the password
        const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);

        // Create user data with hashed password
        const userData = {
            ...req.body,
            password: hashedPassword, // Replace plain text password with hashed password
        };

        // Save the user to the database
        const user = await User.create(userData);

        // Remove password from response for security
        const userResponse = { ...user.toObject(), password: undefined };

        res.status(201).json(userResponse);
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    postUser,
}