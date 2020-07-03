const express = require('express');
const { check } = require('express-validator');

const storagesController = require('../controllers/storage-controller');
const router = express.Router();

router.post('/',
    [
        check('name', 'Please provide a storage name').not().isEmpty().isLength({min: 2})
    ],
 storagesController.createStorage);
 
router.get('/', storagesController.getAllStorages);
router.get('/:id', storagesController.getStorageByID);
router.delete('/:id', storagesController.deleteStorage);

module.exports = router;