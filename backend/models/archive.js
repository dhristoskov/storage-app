const mongoose = require('mongoose');

const archivSchema = new mongoose.Schema({
    //storage: { type: mongoose.Types.ObjectId, required: true, ref: 'Storage'},
    addDate: { type: Date, default: Date.now, required: true},
    //expDate: { type: Date },
    //creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    products:[{type: mongoose.Types.ObjectId, required: true, ref: 'Product'}]
});

module.exports = mongoose.model('Archive', archivSchema);