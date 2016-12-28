'use strict';
let express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');
const bcrypt = require('bcryptjs');


router.get('/',function(req,res){
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