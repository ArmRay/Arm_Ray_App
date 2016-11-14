/**
 * Created by colin on 8/24/16.
 */
var mongoose = require('mongoose');
var postSchema = new mongoose.Schema({

        post_id: String,
        created_date: String,
        updated_date: String,
        post_title: String,
        post_text: String,
        post_keywords: [],
        post_author_id: String,
        post_tags: [],
        post_tags_id: [],
        is_post_private: Boolean

});

mongoose.model('Post', postSchema);
