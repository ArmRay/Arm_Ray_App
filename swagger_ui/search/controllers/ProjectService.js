'use strict';

exports.getProjects = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (BigDecimal)
  * page (BigDecimal)
  * project_id (String)
  * created_date (Date)
  * updated_date (Date)
  * project_name (String)
  * project_main_grant_type (String)
  * project_description (String)
  * project_creator_id (List)
  * project_collaborators_id (List)
  * project_keywords (List)
  * project_urls (List)
  * grant_id (String)
  * university_id (String)
  * grant_facilitator (String)
  * project_file (List)
  * reviews (List)
  * posts (List)
  * is_project_private (Boolean)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByCollaboratorId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByCreatedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByCreatedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByCreatorId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * user_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByGrantId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * grant_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByModifiedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByModifiedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "project_collaborators_id" : [ "aeiou" ],
  "project_keywords" : [ "aeiou" ],
  "project_creator_id" : [ "aeiou" ],
  "grant_facilitator" : "aeiou",
  "project_urls" : [ "aeiou" ],
  "project_name" : "aeiou",
  "posts" : [ "aeiou" ],
  "is_project_private" : true,
  "project_description" : "aeiou",
  "university_id" : "aeiou",
  "reviews" : [ "aeiou" ],
  "project_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "grant_ids" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProjectsByUniversityId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
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
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUniversitiesByProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * project_id (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "city" : "aeiou",
  "profile_images" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "university_name" : "aeiou",
  "state" : "aeiou",
  "uni_id" : "aeiou",
  "project_ids" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUniversitiesByProjectsForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * projects (List)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "city" : "aeiou",
  "profile_images" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "university_name" : "aeiou",
  "state" : "aeiou",
  "uni_id" : "aeiou",
  "project_ids" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByProjectId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * project_id (String)
  * max (BigDecimal)
  * page (BigDecimal)
  **/
    var examples = {};
  examples['application/json'] = [ {
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
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

