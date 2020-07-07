const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema({
    name:{ type: String, required: true, minlength: 2, unique: true },
    //archives:[{ type: mongoose.Types.ObjectId, required: true, ref: 'Archive' }] <-- To be added later with session
});

module.exports = mongoose.model('Storage', storageSchema);
