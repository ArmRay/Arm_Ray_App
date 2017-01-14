'use strict';
let express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const config = require('./config');
const _ = require('lodash');



let base = function(req,res){
	console.log('inside of get request');
	User.find(function(err,users){
		if(err){
			console.error(err);
		}
		res.status(200).json(users);

	})

	console.log('nothing came out')
}

let register = function(req,res){
	console.log('req body',req.body);
	if(req.body){
		console.log('the user body was not empty');
		let firstname = req.body.firstname;
		let email = req.body.email;
		let lastname = req.body.lastname;
		let subject = 'Thank you for registering '+firstname+'! ✔';
		let html = '<b>Your email and information has been successfully submitted, as the application enters the next phase you will be provided instructions on how to complete your registrtion!</br>~ With Love From the ArmRay Team<b>';

		let transporter = nodemailer.createTransport({
		    host: 'smtp.office365.com',
		    port: '587',
		    auth: { 
		    	user: config.emailusername,
		     	pass: config.emailpassword 
		    },
		    secureConnection: false,
		    tls: { ciphers: 'SSLv3' }
		});
		console.log('transport settings',transporter);
		let mailOptions = {
		    from: '"ArmRay Registration ?" <donotreply@armray.com>', // sender address
		    to: email, // list of receivers
		    subject: subject, // Subject line
		    html: html // html body
		};

		transporter.sendMail(mailOptions, function(error, info){
	    	if(error){
	        	console.log('sendmail error',error);
	        	res.status(200).json({'error':'There was an error!'});
	    	}
	    	let newuser = new User();
			newuser.firstname = firstname;
			newuser.email = email;
			newuser.lastname = lastname;

			newuser.save(function(err){
				if(err){
					console.log(err);
					res.status(200).json({'error':'There was an error!'});
				}
				res.status(200).json({'message':'Success'});
		})
	    	console.log('info',info);
	    	console.log('Message sent: ' + info.response);
		});


		

		

	}
	else{
		console.log('the user body was empty')
		res.status(200).json({'message':'Failure'});
	}
}




let checkEmail = function(req,res){
	if(req.params.email){
		User.find({email:req.params.email}, function(err,user){
        if(err) console.error(err);

        let userexists = _.isEmpty(user);
        console.log(_.isEmpty(user));
        if(userexists){
            console.log('user does not exist')
            res.status(200).json({exists:false})
        }
        else{
            console.log('user does exist', user);
            res.status(200).json({exists:true});
        }

    })
	}
	else{
		res.status(200).json({exists:'false'});
	}
}


router.get('/', base);
router.post('/register', register);
ruter.post('/checkusername/:email', checkEmail);



module.exports = router;