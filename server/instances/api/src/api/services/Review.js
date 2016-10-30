const Grant = models.grant;
const Post = models.post;
const Project = models.project;
const Review = models.review;
const Skill = models.skill;
const University = models.University;
const User = models.User;
const UserSkill = models.userkSkill;

export function createReview (options, callback) {
  let review = new Review();

  review.reviewer_id = options.req.body.project_name;
  review.review_body = options.req.body.project_description;
  review.review_url = options.req.body.grant_facilitator;
  review.rating = options.req.body.posts_id;

  review.created_date: new Date();
  review.updated_date: project.created_date;
  
  review.save(function(err) {
    if (err) {
      console.error(err);
    }
  })

}


/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {Function} callback
 */
export function getReviewById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.review_body body of &#x60;Review&#x60;
 * @param {String} options.reviewer_id The &#x60;User&#x60;who wrote &#x60;Review&#x60;
 * @param {Number} options.rating Rating (1 &lt;&#x3D; rating &lt;&#x3D; 5)
 * @param {Function} callback
 */
export function updateReviewById (options, callback) {

  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    review.reviewer_id = options.req.body.reviewer_id ? options.req.body.reviewer_id : review.reviewer_id;
    review.review_body = options.req.body.review_body ? options.req.body.review_body : review.review_body;
    review.rating = options.req.body.rating ? options.req.body.rating : review.rating;
    review.updated_date = new Date();

    review.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Review has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {Function} callback
 */
export function deleteReviewById (options, callback) {
  Review.remove({
    _id: options.id
  }, function(err, review) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been deleted'
    });
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewBodyById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.review_body);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.body
 * @param {Function} callback
 */
export function updateReviewBodyById (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.review_body = options.req.body.body;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.body
 * @param {Function} callback
 */
export function setReviewBodyById (options, callback) {
  updateReviewBodyById (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {Function} callback
 */
export function deleteReviewBodyById (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.review_body = null;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewReviewerById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.reviewer_id);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function deleteReviewReviewer (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.reviewer_id = null;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}


/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.user_id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function isUserReviewReviewer (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.reviewer_id == options.req.body.user_id);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.user_id
 * @param {Function} callback
 */
export function updateReviewReviewerById (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.reviewer_id = options.req.body.user_id;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.user_id
 * @param {Function} callback
 */
export function setReviewReviewerById (options, callback) {
  updateReviewReviewerById (options, callback)
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.user_id The &#x60;Review&#x60; reviewer id
 * @param {Function} callback
 */
export function deleteReviewReviewerById (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.reviewer_id = null;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewRatingById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.rating);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function deleteReviewRating (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.rating = null;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.rating The &#x60;Review&#x60; rating
 * @param {Function} callback
 */
export function isReviewRating (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.rating == options.req.body.rating);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.rating The &#x60;Review&#x60; rating
 * @param {Function} callback
 */
export function updateReviewRating (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.rating = options.req.body.rating;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.rating The &#x60;Review&#x60; rating
 * @param {Function} callback
 */
export function setReviewRating (options, callback) {
  updateReviewRating (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewUrlById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.review_url);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function deleteReviewUrl (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.review_url = null;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.url The &#x60;Review&#x60; url
 * @param {Function} callback
 */
export function updateReviewUrl (options, callback) {
  Review.findById(options.id, function(err, review) {
    if (err) {
      console.error(err);
    }

    review.updated_date = new Date();
    review.review_url = options.req.body.url;

  review.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Review has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.url The &#x60;Review&#x60; url
 * @param {Function} callback
 */
export function setReviewUrl (options, callback) {
  updateReviewUrl (options, callback)
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewCreatedDateById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.created_date);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewUpdatedDateById (options, callback) {
  Review.findById(options.id, function(err, review){
    if(err){
      console.error(err);
    }
    res.status(200).json(review.updated_date);
  })
}
