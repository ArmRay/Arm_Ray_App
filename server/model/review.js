/**
 * Created by colin on 8/24/16.
 */
var  mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({

        review_id: String,
        reviewer_id: String,
        created_date: String,
        updated_date: String,
        review_body: String,
        review_url : String,
        rating: Number

});

mongoose.model('Review', reviewSchema);
