/**
 * Created by colin on 8/24/16.
 */
/**
 * Created by colin on 8/24/16.
 */
var mongoose = require('mongoose');
var grantSchema = new mongoose.Schema({

        grant_id: String,
        created_date: String,
        updated_date: String,
        grant_url: [],
        grant_description: String,
        grant_amount: Number

});

mongoose.model('Grant', grantSchema);