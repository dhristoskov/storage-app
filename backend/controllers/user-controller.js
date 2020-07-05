const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const User = require('../models/user');
require('dotenv').config();

const registerUser = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ msg: 'Invalid input, please check your data' });
    }

    const { username, email, password } = req.body;

    let user;
    try {
        user = await User.findOne({ email });
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    }

    if(user){
        return res.status(422).json({ msg: 'User already exists, please login instead.' })
    }

    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    }

    user = new User({
        username,
        email,
        password: hashedPassword,
        resetToken: '',
        expToken: ''
    });

    try{
        await user.save();
    }catch{
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    }
    
    let token;
    try{
        token = jwt.sign(
            {userId: user.id, username: user.username},
            process.env.JWT_SECRET, 
            {expiresIn: '1h'});
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    };

    res.status(201).json({userId: user.id, username: user.username, token: token});
};

const loginUser = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ msg: 'Invalid input, please check your data' });
    }

    const { email, password } = req.body;

    let user;
    try {
        user = await User.findOne({ email });
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    }

    if(!user){
        return res.status(403).json({ msg: 'Invalid credentials, could not log you in.'});
    }

    let isPasswordMatch = false;
    try{
        isPasswordMatch = await bcrypt.compare(password, user.password);
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    }
    if(!isPasswordMatch){
        return res.status(403).json({ msg: 'Invalid credentials, could not log you in.'});
    }

    let token;
    try{
        token = jwt.sign(
            {userId: user.id, username: user.username},
            process.env.JWT_SECRET, 
            {expiresIn: '1h'});
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    };

    res.json({userId: user.id, username: user.username, token: token});
};

const checkEmail = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ msg: 'Invalid input, please check your data' });
    }

    const { email } = req.body;

    let isItExist
    try {
        isItExist = await User.findOne({ email });
    }catch(err){
        console.errors(err.message);
        res.status(500).send({ msg: 'Server Error' });
    }

    if(isItExist){
        return res.json({result: true});
    }else{
        return res.json({result: false});
    }  
};


exports.registerUser = registerUser;
exports.loginUser = loginUser;
exports.checkEmail = checkEmail;