const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true, minlength: 6 },
    password: { type: String, required: true, minlength: 6},
    resetToken: { type: String},
    expToken: {type: Date}
});

module.exports = mongoose.model('User', userSchema);