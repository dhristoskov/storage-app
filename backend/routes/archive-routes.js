const express = require('express');
const { check } = require('express-validator');

const archivesController = require('../controllers/archive-controller');
const router = express.Router();

router.post('/', archivesController.addToArchive);
router.get('/:id', archivesController.getListsByStorageId);
router.get('/single-item/:id', archivesController.getByArchiveId);
router.get('/', archivesController.getAllLists);
router.delete('/:id', archivesController.deleteListById);
router.delete('/single-item/:id/:pid', archivesController.deleteSingleProduct);

module.exports = router;