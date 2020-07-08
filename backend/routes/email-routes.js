const express = require('express');
const { check } = require('express-validator');

const emailController = require('../controllers/email-controller');
const router = express.Router();

router.post('/reset',
    [
        check('email', 'Please provide an email').isEmail().not().isEmpty().isLength({ min: 6 }).normalizeEmail()
    ], 
    emailController.resetPassword
);

module.exports = router;