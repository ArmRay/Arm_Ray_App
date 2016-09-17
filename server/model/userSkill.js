/**
 * Created by colin on 9/17/16.
 */
var mongoose = require('mongoose');
var userSkillSchema = new mongoose.Schema({

        skill_id: String,
        user_id: String,
        endorsements: [],
        created_date: String,
        updated_date: String
});

mongoose.model('UserSkill', userSkillSchema);
