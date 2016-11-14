/**
 * Created by colin on 8/24/16.
 */
var  mongoose = require('mongoose');

var projectSchema = new mongoose.Schema({

            project_id: String,
            project_name: String,
            project_description: String,
            university_id: String,
            grant_facilitator: String,
            posts_id: [],
            project_collaborators_id: [],
            grants_id: [],
            project_file: [],
            reviews_id: [],
            project_keywords: [],
            project_creator_id: [],
            project_urls: [],
            created_date: String,
            updated_date: String,
            is_project_private: Boolean

});

mongoose.model('Project', projectSchema);
