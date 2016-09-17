/**
 * Created by colin on 9/17/16.
 */
var mongoose = require('mongoose');
var skillSchema = new mongoose.Schema({

        skill_id: String,
        description: String,
        created_date: String,
        updated_date: String
});

mongoose.model('Skill', skillSchema);
