const mongoose = require('mongoose');

const archivSchema = new mongoose.Schema({
    storage: { type: mongoose.Types.ObjectId, required: true, ref: 'Storage'},
    addDate: { type: Date, default: Date.now, required: true},
    expDate: { type: Date },
    creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    products:[{type: String, require: true }]
});

module.exports = mongoose.model('Archive', archivSchema);