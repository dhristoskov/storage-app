const express = require('express');
const { check } = require('express-validator');

const archivesController = require('../controllers/archive-controller');
const router = express.Router();

router.post('/', archivesController.addToArchive);

module.exports = router;