/**
 * Created by colin on 8/24/16.
 */
/**
 * Created by colin on 8/24/16.
 */
var mongoose = require('mongoose');
var grantSchema = new mongoose.Schema({
	//The ID is automatically set in the _id by Mongoose.
	//If you declare it, you have to generate it manually
        grant_type: String,
        grant_description: String,
        grant_amount: {type: Number. default: 0},
        grant_url: [String],
        grant_keywords: [String],
        created_date: {type:Date, default:Date.now},
        modified_date: {type:Date}
});

mongoose.model('Grant', grantSchema);
