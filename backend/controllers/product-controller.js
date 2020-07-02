const { validationResult } = require('express-validator');

const Product = require('../models/product');

const postSingleProduct = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({msg: 'Invalid inputs, please check your data.'});
    }

    const { name, price, qty, type, storage } = req.body;

    const priceVat = parseFloat(price * (1 + 20 / 100)).toFixed(2);
    const totalPrice = parseFloat(price * qty).toFixed(2);
    const totalVat = parseFloat(totalPrice * ( 1 + 20 / 100)).toFixed(2)

    try {
        const product = new Product({
            name,
            price,
            priceVat,
            qty,
            totalPrice,
            totalVat,
            type,
            storage,
            isDone: false
        });
        const newProduct = await product.save();
        res.status(201).json({ product: newProduct });
    }catch(err){
        console.error(err.message);
        res.status(500).send({msg: 'Creating a new product failed, try again'});
    }
}

exports.postSingleProduct = postSingleProduct;