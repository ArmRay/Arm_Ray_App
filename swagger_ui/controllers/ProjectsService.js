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
  "grant_id" : "aeiou",
  "project_file" : [ "aeiou" ],
  "created_date" : "2000-01-23T04:56:07.000+00:00",
  "updated_date" : "2000-01-23T04:56:07.000+00:00",
  "project_main_grant_type" : "aeiou"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

