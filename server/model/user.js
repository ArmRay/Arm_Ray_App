/**
 * Created by colin on 8/24/16.
 */
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');


var userSchema = new mongoose.Schema({
    username: {type:String, required:true},
    password: {type:String, required:true},
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
    is_user_private: {type:Boolean, default:true}
});




let User = module.exports = mongoose.model('User', userSchema);



//Find User by Username
module.exports.getUserByUsername = function(username, callback){
    console.log("Username:" + username);
    var query = {username: username};
    User.findOne(query, callback);
}
//Find User  Id
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

//Compare user password with password given.
module.exports.comparePassword = function(candidate, hash, callback){
    bcrypt.compare(candidate, hash, function(err, isMatch){
        if(err) throw err;
        callback(null, isMatch);
    });
}






