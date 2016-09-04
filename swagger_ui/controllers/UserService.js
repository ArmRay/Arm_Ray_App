'use strict';

exports.createProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * project_name (String)
  * project_description (String)
  * project_creator_id (List)
  * is_project_private (Boolean)
  * project_main_grant_type (String)
  * project_collaborators_id (List)
  * project_keywords (List)
  * project_urls (List)
  * grant_id (String)
  * university_id (String)
  * grant_facilitator (String)
  * project_file (List)
  * reviews (List)
  * posts (List)
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

exports.createUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * first_name (String)
  * last_name (String)
  * is_collaborator (Boolean)
  * is_creator (Boolean)
  * city (String)
  * state (String)
  * university_ids (List)
  * project_id (String)
  * keywords (List)
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

exports.updateProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
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
  examples['application/json'] = "aeiou";
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.updateUser = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * first_name (String)
  * last_name (String)
  * is_collaborator (Boolean)
  * is_creator (Boolean)
  * city (String)
  * state (String)
  * university (String)
  * project_id (String)
  * keywords (List)
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

