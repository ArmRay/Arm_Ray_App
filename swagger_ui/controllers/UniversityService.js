'use strict';

exports.deleteProjecUniversities = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.deleteUserUniversityById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
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

exports.getUniversitiesById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "city" : "aeiou",
  "profile_images" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "university_name" : "aeiou",
  "state" : "aeiou",
  "uni_id" : "aeiou",
  "project_ids" : [ "aeiou" ],
  "geolocation" : [ 1.3579000000000001069366817318950779736042022705078125 ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getUsersByUniversityId = function(args, res, next) {
  /**
   * parameters expected in the args:
  * university_id (String)
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

exports.isUniversityOnProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.isUniversityOnUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = true;
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.modifyProjectUniversity = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.setProjectUniversity = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.settUserUniversityById = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * university_id (String)
  **/
    var examples = {};
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

