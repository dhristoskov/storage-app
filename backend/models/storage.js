const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
    name:{ type: String, required: true, minlength: 2 }
});

module.exports = mongoose.model('Storage', storageSchema);
