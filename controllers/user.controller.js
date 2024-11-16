const User = require('../models/user.model.js');

const postUser = async (req, res) => {
    // res.send("Data Recieved");
    console.log(req.body);
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    postUser,
}