const express = require('express');
const { check } = require('express-validator');

const archivesController = require('../controllers/archive-controller');
const router = express.Router();

router.post('/', 
    [
        check('addDate', 'Please provide date').isISO8601().toDate() 
        .custom((value, {req}) => {
            if(value <= Date.now()){
                throw new Error('Invalide date');
            }
            return true;
        }),     
        check('expDate', 'Please provide date').isISO8601().toDate() 
        .custom((value, {req}) => {
            if(value <= Date.now()){
                throw new Error('Invalide date');
            }
            return true;
        })
    ],
archivesController.addToArchive);
//Get archives by storage ID
router.get('/:id', archivesController.getListsByStorageId);
//Get single archive item
router.get('/single-item/:id', archivesController.getByArchiveId);
//Get all archive items
router.get('/', archivesController.getAllLists);
//Delete archive item
router.delete('/:id', archivesController.deleteListById);
//Delete single product item
router.delete('/single-item/:id/:pid', archivesController.deleteSingleProduct);

module.exports = router;