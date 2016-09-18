'use strict';

exports.getGrants = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (BigDecimal)
  * page (BigDecimal)
  * grant_id (String)
  * created_date (Date)
  * updated_date (Date)
  * grant_url (List)
  * grant_description (String)
  * grant_amount (String)
  * min_amount (String)
  * max_amount (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByAmount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * minimum (Float)
  * maximum (Float)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByAmountRange = function(args, res, next) {
  /**
   * parameters expected in the args:
  * min (Float)
  * max (Float)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByCreatedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByCreatedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * created_date (Date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByKeyword = function(args, res, next) {
  /**
   * parameters expected in the args:
  * keyword (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByKeywords = function(args, res, next) {
  /**
   * parameters expected in the args:
  * keywords (List)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByMaxAmount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * amount (Float)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByMinAmount = function(args, res, next) {
  /**
   * parameters expected in the args:
  * amount (Float)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByModifiedDate = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (String)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByModifiedDateForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * modified_date (Date)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByType = function(args, res, next) {
  /**
   * parameters expected in the args:
  * type (Float)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

exports.getGrantsByTypeForm = function(args, res, next) {
  /**
   * parameters expected in the args:
  * type (Float)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "grant_url" : [ "aeiou" ],
  "grant_description" : "aeiou",
  "grant_amount" : 1.3579000000000001069366817318950779736042022705078125,
  "grant_type" : "aeiou",
  "grant_id" : "aeiou",
  "grant_keywords" : [ "aeiou" ],
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

