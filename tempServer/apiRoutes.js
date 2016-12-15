'use strict';
let express = require('express');
const router =express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./userModel');


User.find({'username':'sysadmin'}, function(err,user){
	console.log('inside of user find');
	if(err){
		console.log(err);
	}
	if(!user){
		let newuser = new User();
		user.username = 'sysadmin';
		user.password = 'welcome1';
		user.email = 'daniel.ashcraft@ofashandfire.com';
		newuser.save(function(err,user){
			if(err){
				console.log(err);
			}
			console.log('saved sysadmin user!');
		})
	}
	if(user){
		console.log('sysadmin exists');
	}
})


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



});


module.exports = router;