'use strict';
let mongoose = require('mongoose');
let config = require('./config');
mongoose.Promise = global.Promise;
let Schema = mongoose.Schema;
let dburl = 'mongodb://'+config.dbuser+':'+config.dbpassword+'@ds117839.mlab.com:17839/armray_prod_db'
let db = mongoose.connect(dburl, function(err){
		console.error('Prod db been connected!')
		if(err) {

		console.error(err);			
		}

});



module.exports = db;