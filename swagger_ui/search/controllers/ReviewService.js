'use strict';

exports.getReviewsByCreatedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewsByCreatedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (Date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewsByMinRating = function(args, res, next) {
  /**
   * parameters expected in the args:
  * rating (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewsByModifiedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewsByRating = function(args, res, next) {
  /**
   * parameters expected in the args:
  * min (BigDecimal)
  * max (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewsByReviewer = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewss = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (BigDecimal)
  * page (BigDecimal)
  * review_id (String)
  * created_date (Date)
  * updated_date (Date)
  * reviewer_id (String)
  * review_body (String)
  * rating (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getReviewssByModifiedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (Date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "review_id" : "aeiou",
  "reviewer_id" : "aeiou",
  "rating" : 123,
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "reviewer" : {
    "keywords" : [ "aeiou" ],
    "city" : "aeiou",
    "university_ids" : [ "aeiou" ],
    "profile_images" : [ "aeiou" ],
    "last_name" : "aeiou",
    "is_creator" : true,
    "project_ids" : [ "aeiou" ],
    "user_skill_ids" : [ "aeiou" ],
    "review_ids" : [ "aeiou" ],
    "is_collaborator" : true,
    "is_user_private" : true,
    "user_id" : "aeiou",
    "created_date" : "2000-01-23T04:56:07.000+00:00",
    "updated_date" : "2000-01-23T04:56:07.000+00:00",
    "state" : "aeiou",
    "first_name" : "aeiou",
    "recent_collaborators_id" : [ "aeiou" ],
    "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
  },
  "review_body" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

