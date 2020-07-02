const express = require('express');
const { check } = require('express-validator');

const productsController = require('../controllers/product-controller');
const router = express.Router();

router.post('/', productsController.postSingleProduct);

module.exports = router;