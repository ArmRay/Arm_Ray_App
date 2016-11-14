/**
 * @param {Object} options
 * @param {String} options.post_title ID of &#x60;User&#x60; author of post
 * @param {String} options.post_text ID of &#x60;User&#x60; author of &#x60;Post&#x60;
 * @param {String} options.post_creator_id ID of &#x60;User&#x60; author of post
 * @param {Array} options.post_tags_id array of &#x60;User&#x60;s tagged in &#x60;Post&#x60;
 * @param {Array} options.post_keywords array of keywords for &#x60;Post&#x60;
 * @param {Boolean} options.is_post_private is &#x60;Post&#x60; private?
 * @param {Function} callback
 */

import models from '../../../../../model';
import bcrypt from 'bcrypt';

const Grant = models.grant;
const Post = models.post;
const Project = models.project;
const Review = models.review;
const Skill = models.skill;
const University = models.University;
const User = models.User;
const UserSkill = models.userkSkill;



export function createPost(options, callback) {
  let post = new Post();

  post.created_date = new Date();
  post.updated_date = post.created_date;
  post.post_title = options.req.body.post_title;
  post.post_text = options.req.body.post_text;
  post.post_keywords = options.req.body.post_keywords;
  post.post_author_id = options.req.body.post_author_id;
  post.post_tags = options.req.body.post_tags;
  post.post_tags_id = options.req.body.post_tags_id;
  post.is_post_private = options.req.body.is_post_private;

  post.save(function(err) {
    if (err) {
      console.error(err);
    }
  })
}


/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function deletePostById(options, callback) {
  Post.remove({
    _id: options.id
  }, function(err, grant) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Post has been deleted'
    });
  })

}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.post_title The &#x60;Post&#x60; name
 * @param {String} options.post_text The &#x60;Post&#x60; body
 * @param {String} options.post_creator_id ID of &#x60;User&#x60; author of post
 * @param {Array} options.post_tags_id array of &#x60;User&#x60;s tagged in &#x60;Post&#x60;
 * @param {Array} options.post_keywords array of keywords for &#x60;Post&#x60;
 * @param {Boolean} options.is_post_private Is &#x60;Post&#x60;private?
 * @param {Function} callback
 */
export function updatePosttById(options, callback) {

  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_title = options.req.body.post_title ? options.req.body.post_title : post.post_title;
    post.post_text = options.req.body.post_text ? options.req.body.post_text : post.post_text;
    post.post_keywords = options.req.body.post_keywords ? options.req.body.post_keywords : post.post_keywords;
    post.post_author_id = options.req.body.post_creator_id ? options.req.body.post_creator_id : post.post_author_id;
    post.post_tags = options.req.body.post_tags ? options.req.body.post_tags : post.post_tags;
    post.post_tags_id = options.req.body.post_tags_id ? options.req.body.post_tags_id : post.post_tags_id;
    post.is_post_private = options.req.body.is_post_private ? options.req.body.is_post_private : post.is_post_private;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })

  })



}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function deletePostAuthorById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_author_id = options.req.body.post_author_id;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.text new author
 * @param {Function} callback
 */
export function updatePostAuthorByIdPost(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_author_id = options.req.body.text;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.author new author
 * @param {Function} callback
 */
export function updatePostAuthorById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_author_id = options.req.body.author;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function deletePostKeywordsById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_keywords = null;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.keywords new tags
 * @param {Function} callback
 */
export function replacePostKeywordsById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_keywords = options.req.body.keywords;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.keywords new keywords
 * @param {Function} callback
 */
export function updateProjectKeywordsById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_keywords.push(options.req.body.keywords);

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function deletePostKeywordById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();

    let ndx = post.keywords.indexOf(options.req.body.keyword);
    if(ndx > -1){
      post.post_keywords.splice(ndx, 1);
    }

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.keyword The &#x60;User&#x60; id
 * @param {Function} callback
 */
export function addPostKeywordByIdPost(options, callback) {
  updateProjectKeywordsById(options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x27;s name
 * @param {String} options.keyword the keyword
 * @param {Function} callback
 */
export function addPostKeywordById(options, callback) {
  updateProjectKeywordsById(options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Boolean} options.is_private is &#x60;Post&#x60;private?
 * @param {Function} callback
 */
export function updatePostPrivacyByIdPost(options, callback) {
  updatePostPrivacyById(options, callback)
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Boolean} options.is_private is &#x60;Post&#x60;private?
 * @param {Function} callback
 */
export function updatePostPrivacyById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.is_post_private = options.req.body.is_private;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function deleteProjectTagsById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_tags_id = null;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.tagged_users new tags
 * @param {Function} callback
 */
export function replacePostTagsById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_tags_id = options.req.body.tagged_users;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.user_id The &#x60;User&#x60; id
 * @param {Function} callback
 */
export function deletePostTagsById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    let ndx = post.post_tags_id.indexOf(options.req.body.user_id);
    if(ndx > -1){
      post.post_tags_id.splice(ndx, 1);
    }

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.user_id The &#x60;User&#x60; id
 * @param {Function} callback
 */
export function addPostTagsByIdPost(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_tags_id.push(options.req.body.user_id);

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.user_id new tags
 * @param {Function} callback
 */
export function updatePostTagsById(options, callback) {
  addPostTagsByIdPost(options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function deletePostTextById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_text = null;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.text new title
 * @param {Function} callback
 */
export function updatePostTextByIdPost(options, callback) {
  updatePostTextById(options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.text new text
 * @param {Function} callback
 */
export function updatePostTextById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_text = options.req.body.text;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function deletePosTitleById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_title = null;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.title new title
 * @param {Function} callback
 */
export function updatePostTitleByIdPost(options, callback) {
  updatePostTitleById(options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.title new title
 * @param {Function} callback
 */
export function updatePostTitleById(options, callback) {
  Post.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    post.updated_date = new Date();
    post.post_title = options.req.body.post_title;

    post.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Post has been updated'
      });
    })
  })
}
