const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    username: {
        type: String,
        required:true,
        unique:true
    },
    password: String,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
