const crypto = require('crypto');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const { validationResult } = require('express-validator');

require('dotenv').config();

const User = require('../models/user');

const transport = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_user: process.env.SENDGRID_API_KEY
    }
}));

const resetPassword = async ( req, res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ msg: 'Invalid input, please check your data' });
    }
    
    let token
    crypto.randomBytes(32, (err, buffer) => {
        if(err){
            console.log(err)
        }
    token = buffer.toString('hex');       
    });

    let user
    try{
        user = await User.findOne({email: req.body.email});
    }catch(err){
        console.log(err);
        res.status(500).send({msg: 'Server Error, could not find a user with that email'});
    };

    if(!user){
        return res.status(403).json({ msg: 'No account with that e-mail'});
    };

    try{
        user.resetToken = token;
        user.expToken = Date.now() + 3600000;
        await user.save();
    }catch(err){
        console.log(err);
        res.status(500).send({ msg: 'Server error, can not update user'});
    }

    try{
        transport.sendMail({
            to: req.body.email,
            from: 'd_hristoskov@hotmail.com',
            subject: 'Reset Password E-Mail',
            html: `<h3>This is your Password reset link</h3>
            <P>Click that <a href="http://localhost:5000/api/users/reset/${token}">Link</a> to reset your password and create a new one</p>
            <p>The key will expired in 1 hour</p>
            </br/
            <h3>Thank you for choosing us</h3>`
        })
        res.send('Email sent!');
    }catch(err){
        console.log(err);
        res.status(500).send({ msg: 'We can not send that e-mail'});
    }
};

exports.resetPassword = resetPassword;