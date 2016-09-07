/**
 * Created by colin on 8/24/16.
 */
var  mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({

            project_id: String,
            created_date: String,
            updated_date: String,
            project_name: String,
            project_main_grant_type: String,
            project_description: String,
            project_creator_id: [],
            project_collaborators_id: [],
            project_keywords: [],
            project_urls: [],
            grant_id: String,
            university: String,
            grant_facilitator: String,
            project_file: [],
            reviews: [],
            posts: [],
            is_project_private: Boolean

});

mongoose.model('Project', projectSchema);