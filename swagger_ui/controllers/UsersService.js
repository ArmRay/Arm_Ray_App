'use strict';

exports.getUsers = function(args, res, next) {
  /**
   * parameters expected in the args:
  * size (BigDecimal)
  * page (BigDecimal)
  * first_name (String)
  * last_name (String)
  * is_collaborator (Boolean)
  * is_creator (Boolean)
  * city (String)
  * state (String)
  * university_ids (List)
  * project_id (String)
  * created_date (String)
  * modified_date (String)
  * keywords (List)
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

