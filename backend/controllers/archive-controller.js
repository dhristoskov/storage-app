const { validationResult } = require('express-validator');
//const mongoose = require('mongoose');

const Archive = require('../models/archive');
const Product = require('../models/product');

const addToArchive = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({msg: 'Invalid inputs, please check your data.'});
    }

    const { data } = req.body;

    const productList = [];
    for(i in data) {
        const { name, price, qty, type, storage } = data[i];

        const priceVat = parseFloat(price * (1 + 20 / 100)).toFixed(2);
        const totalPrice = parseFloat(price * qty).toFixed(2);
        const totalVat = parseFloat(totalPrice * ( 1 + 20 / 100)).toFixed(2);

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

        productList.push(product);
    }

    try{
        const bulk = Archive.collection.initializeOrderedBulkOp();
        listCounter = productList.length;

        productList.forEach((el) => {
            bulk.insert(el);
            listCounter--;

            // if(studentsCounter % 1000 === 0){
            //     bulk.execute()
            //     bulk = Student.collection.initializeOrderedBulkOp();
            //}
            if(listCounter === 0){
                bulk.execute();
            }
        });
        res.json({ products: productList.map(product => product.toObject({ getters: true })) });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error!');
    }
};

exports.addToArchive = addToArchive;