const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{ type: String, required: true, minlength: 2 },
    price: { type: Number },
    priceVat: { type: Number },
    qty: { type: Number, required: true },
    totalPrice: { type: Number },
    totalVat: { type: Number },
    type: { type: String, required: true },
    storage: { type: String, required: true, minlength: 3 },
    isDone: { type: Boolean, default:false, required: true }
});

module.exports = mongoose.model('Product', productSchema)