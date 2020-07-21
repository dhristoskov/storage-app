const express = require('express');
const { check } = require('express-validator');

const usersController = require('../controllers/user-controller');
const router = express.Router();

//Register new User
router.post('/register',
    [
        check('username', 'Please provide a name').not().isEmpty().isLength({ min: 3 }).trim(),
        check('email', 'Please provide an email').isEmail().not().isEmpty().isLength({ min: 6 }).normalizeEmail(),
        check('password', 'Password at least 6 character long').isLength({ min: 6 }).trim()
    ],
    usersController.registerUser
);

//Log-in already existing User
router.post('/login',
    [
        check('email', 'Please provide an email').isEmail().not().isEmpty().isLength({ min: 6 }).normalizeEmail(),
        check('password', 'Password at least 6 character long').isLength({ min: 6 }).trim()
    ],
    usersController.loginUser
);


//Check if user exist
router.post('/check-email', 
    [
        check('email', 'Please provide an email').isEmail().not().isEmpty().isLength({ min: 6 }).normalizeEmail()
    ],
    usersController.checkEmail
);

//Update new password
router.post('/update',
    [
        check('password', 'Password at least 6 character long').isLength({ min: 6 }).trim()
    ], 
    usersController.updateUserPassword
);

module.exports = router;