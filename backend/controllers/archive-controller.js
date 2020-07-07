const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Archive = require('../models/archive');
const Storage = require('../models/storage');
//const Product = require('../models/product');

const addToArchive = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({msg: 'Invalid inputs, please check your data.'});
    }

    const { name, addDate, data } = req.body;

    let storageToCheck;
    try{
        storageToCheck = await Storage.findOne({ name });
    }catch(err){
        console.error(err.message);
        res.status(500).send('Creating list failed, please try again');
    };

    if(!storageToCheck){
        return res.status(404).json({msg: 'Could not find storage with this name.'});
    };

    const taxes = 20;
    const productList = [];
    for(i in data) {
        const { name, price, qty, type, storage, isDone } = data[i];

        const priceVat = parseFloat(price * (1 + 20 / 100)).toFixed(2);
        const totalPrice = parseFloat(price * qty).toFixed(2);
        const totalVat = parseFloat(totalPrice * ( 1 + 20 / 100)).toFixed(2);

        const product = {
            name,
            price,
            priceVat,
            qty,
            totalPrice,
            totalVat,
            type,
            storage,
            isDone
        };

        productList.push(product);
    };

    const totalListPrice = productList.reduce((prev, cur) =>  {
        return prev + (cur.price * cur.qty)
    }, 0);

    console.log(totalListPrice)

    //   const archive = new Archive({
    //         storage: storageToCheck._id,
    //         addDate,
    //         products: productList
    //   });

    try{
        //Need to be not a local server 
        // const session = await mongoose.startSession(); <--To be add later on global server
        // session.startTransaction();
        // await archive.save({session: session});
        // storageToCheck.archives.push(archive);
        // await storageToCheck.save({session: session});
        // await session.commitTransaction();

        const archive = new Archive({
            storage: storageToCheck._id,
            totalListPrice: parseFloat(totalListPrice).toFixed(2),
            totalListVat: parseFloat(totalListPrice * (1 + taxes / 100)).toFixed(2),
            addDate,
            products: productList
        });

        await archive.save();
        res.status(201).json({ archive: archive });
    }catch(err){
        console.error(err.message);
        es.status(500).send({msg: 'Server Error!'});
    }

    //Bulk insert operation   
    // try{
    //     const bulk = Archive.collection.initializeOrderedBulkOp();
    //     listCounter = productList.length;

    //     productList.forEach((el) => {
    //         bulk.insert(el);
    //         listCounter--;

    //         if(listCounter % 1000 === 0){
    //             bulk.execute()
    //             bulk = Archive.collection.initializeOrderedBulkOp();
    //         }
    //         if(listCounter === 0){
    //             bulk.execute();
    //         }
    //     });
    //     res.json({ products: productList.map(product => product.toObject({ getters: true })) });
    // }catch(err){
    //     console.error(err.message);
    //     res.status(500).send('Server Error!');
    // }
};

exports.addToArchive = addToArchive;