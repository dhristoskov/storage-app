const express = require('express');
const { check } = require('express-validator');

const storagesController = require('../controllers/storage-controller');
const router = express.Router();

router.post('/', storagesController.createStorage);
router.get('/', storagesController.getAllStorages);
router.delete('/:id', storagesController.deleteStorage);

module.exports = router;