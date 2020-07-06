const mongoose = require('mongoose');

const archivSchema = new mongoose.Schema({
    //storage: { type: mongoose.Types.ObjectId, required: true, ref: 'Storage'},
    //addDate: { type: Date, default: Date.now, required: true},
    //expDate: { type: Date },
    //creator: {type: mongoose.Types.ObjectId, required: true, ref: 'User'},
    products:[{
        name:{ type: String, required: true, minlength: 2 },
        price: { type: Number },
        priceVat: { type: Number },
        qty: { type: Number, required: true },
        totalPrice: { type: Number },
        totalVat: { type: Number },
        type: { type: String, required: true },
        storage: { type: String, required: true, minlength: 3 },
        isDone: { type: Boolean, default:false, required: true }
    }]
});

module.exports = mongoose.model('Archive', archivSchema);