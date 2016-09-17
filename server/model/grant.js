/**
 * Created by colin on 8/24/16.
 */
/**
 * Created by colin on 8/24/16.
 */
var mongoose = require('mongoose');
var grantSchema = new mongoose.Schema({

        grant_id: String,
        grant_type: String,
        grant_description: String,
        grant_amount: Number,
        grant_url: [],
        grant_keywords: [],
        created_date: String,
        modified_date: String

});

mongoose.model('Grant', grantSchema);
