'use strict';
let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;
		  
let db = mongoose.connect('mongodb://sysadmin:welcome1@35.166.106.84:27017/tempdb', function(err){
		console.error('test Db has been connected!')
		if(err) {

		console.error(err);			
		}

});



module.exports = db;