/**
 * Created by colin on 8/24/16.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var userSchema = new mongoose.Schema({

    user_id: String,
    first_name: String,
    last_name: String,
    is_creator: Boolean,
    is_collaborator: Boolean,
    profile_images: [],
    created_date: String,
    updated_date: String,
    geolocation: [],
    user_skill_ids: [],
    city: String,
    state: String,
    recent_collaborators_id: [],
    university_id: [],
    project_ids: [],
    keywords: [],
    review_ids: [],
    is_user_private: Boolean

});




mongoose.model('User', userSchema);
