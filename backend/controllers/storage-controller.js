const { validationResult } = require('express-validator');

const Storage = require('../models/storage');

//Create new Storage
const createStorage = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({msg: 'Invalid inputs, please check your data.'});
    }

    try {
        const storage = new Storage({
            name: req.body.name
        });
        const newStorage = await storage.save();
        res.status(201).json({ storage: newStorage });
    }catch(err){
        console.error(err.message);
        res.status(500).send({msg: 'Creating a new Storage failed, try again'});
    }

};

//Get list of all avaliable Storages
const getAllStorages = async ( req, res ) => {

    let allStorages;
    try{
        allStorages = await Storage.find({}).sort({name: 1});
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }

    res.json({ storages: allStorages.map(storage => storage.toObject({ getters: true })) });
};

//Delete Storage by ID
const deleteStorage = async ( req, res ) => {

    let storageToDelete
    try {
        storageToDelete = await Storage.findById(req.params.id);
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }

    if(!storageToDelete){
        return res.status(404).json({ msg: 'Could not find storage for this id' });
    }

    try {
        await Storage.findByIdAndRemove(req.params.id);
        res.status(200).json({msg: 'Storage Deleted.'});
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }

};

exports.createStorage = createStorage;
exports.getAllStorages = getAllStorages;
exports.deleteStorage = deleteStorage;