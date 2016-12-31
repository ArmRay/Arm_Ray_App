'use strict';
let express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const wellknown = require('nodemailer-wellknown');
const config = require('./config');

let godaddy = wellknown('Godaddy');

router.get('/',function(req,res){

	let transporter = nodemailer.createTransport({
     service: 'Godaddy', // <- resolved as 'Postmark' from the wellknown info
     auth: {
     	user: config.emailusername,
     	pass: config.emailpassword
     }
	});

	let mailOptions = {
	    from: '"ArmRay Registration ?" <donotreply@armray.com>', // sender address
	    to: 'daniel.ashcraft@ofashandfire.com', // list of receivers
	    subject: 'Hello ✔', // Subject line
	    text: 'Hello world ?', // plaintext body
	    html: '<b>Hello world ?</b>' // html body
	};

	transporter.sendMail(mailOptions, function(error, info){
    	if(error){
        	console.log(error);
    	}
    	console.log('info',info);
    	console.log('Message sent: ' + info.response);
	});


	console.log('inside of get request');
	User.find(function(err,users){
		if(err){
			console.error(err);
		}
		res.status(200).json(users);

	})

	console.log('nothing came out')
});

router.post('/', function(req,res){
	if(req.body){
		let username = req.body.username;
		let email = req.body.email;
		let password = req.body.password;

		let newuser = new User();
		newuser.username = username;
		newuser.email = email;
		newuser.password = password;


		bcrypt.genSalt(10, function(err, salt) {
        console.log("inside of bcrypt 1  on model");
        if(err){
            console.log('err 1 bcrypt',err); //handle error
        }
        bcrypt.hash(newUser.password, salt, function(err, hash) {
            if(err){
                console.log("error 2",err); //handle error
            }
            newUser.password = hash;

            newUser.save(function(err){
                if(err){
                    console.log(err);
                }
                res.status(200).json(newUser);
            })
        });
    });
	}



});


module.exports = router;