const express = require('express');
const { check } = require('express-validator');

const storagesController = require('../controllers/storage-controller');
const router = express.Router();

//Create Storage
router.post('/',
    [
        check('name', 'Please provide a storage name').not().isEmpty().isLength({min: 2})
    ],
 storagesController.createStorage);
 
//Get all Storages
router.get('/', storagesController.getAllStorages);
//Get Storage by ID
router.get('/:id', storagesController.getStorageByID);
//Delete Storage
router.delete('/:id', storagesController.deleteStorage);

module.exports = router;