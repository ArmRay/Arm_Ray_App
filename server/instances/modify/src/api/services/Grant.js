/**
 * @param {Object} options
 * @param {String} options.grant_url array of URLs for &#x60;Grant&#x60;
 * @param {String} options.grant_description Description of grant
 * @param {Number} options.amount Amount of grant
 * @param {Function} callback
 * @param {Object} options.req The entire req object is available in this variable
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





 
export function createGrant (options, callback) {
  // Implement you business logic here...
      let grant = new Grant();

      grant.grant_type = options.req.body.grant_type;
      grant.grant_description = options.req.body.grant_description;
      grant.grant_amount = options.req.body.grant_amount;
      grant.grant_url = options.req.body.grant_url;
      grant.grant_keywords = options.req.body.grant_keywords;
      grant.created_date = new Date();



      grant.save(function(err){

        if(err){
          console.error(err);
        }

      })
    }

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Object} options.req The entire req object is available in this variable
 * @param {Function} callback
 */
export function deleteGrantById (options, callback) {
  // Implement you business logic here...
      Grant.remove({_id:options.id}, function(err,grant){
        if(err){
          console.error(err);
        }

        res.json({message: 'This Grant has been deleted'});

      })

}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.grant_url array of URLs for &#x60;Grant&#x60;
 * @param {String} options.grant_description Description of &#x60;Grant&#x60;
 * @param {Number} options.amount Amount of &#x60;Grant&#x60;
 * @param {Function} callback
 */
export function updateGrantById (options, callback) {
  // Implement you business logic here...

    Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_type = options.req.body.grant_type;
      grant.grant_description = options.req.body.grant_description;
      grant.grant_amount = options.req.body.grant_amount;
      grant.grant_url = options.req.body.grant_url;
      grant.grant_keywords = options.req.body.grant_keywords;
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })


}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function clearGrantAmount (options, callback) {
  // Implement you business logic here...
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_amount = 0;
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Number} options.amount the &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function setGrantAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Number} options.amount the &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function modifyGrantAmount (options, callback) {
  // Implement you business logic here...

   Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_amount = options.req.body.grant_amount;
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.amount the &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function setGrantAmountPath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.amount the &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function modifyGrantAmountPath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function clearGrantDescription (options, callback) {
  // Implement you business logic here...

   Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_description = '';
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.description the &#x60;Grant&#x60; description
 * @param {Function} callback
 */
export function setGrantDescription (options, callback) {
  // Implement you business logic here...

}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.description the &#x60;Grant&#x60; description
 * @param {Function} callback
 */
export function modifyGrantDescription (options, callback) {
  // Implement you business logic here...

  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_description = options.req.body.grant_description;
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; id
 * @param {Function} callback
 */
export function clearGrantKeywords (options, callback) {
  // Implement you business logic here...

   Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_keywords = [];
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Array} options.keywords the &#x60;Grant&#x60; keywords
 * @param {Function} callback
 */
export function setGrantKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Array} options.keywords the &#x60;Grant&#x60; keywords
 * @param {Function} callback
 */
export function addGrantKeywords (options, callback) {
  // Implement you business logic here...


  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  

      for(var i = 0, i<options.req.body.grant_keywords.length; i++){
        grant.grant_keywords.push(options.req.body.grant_keywords[i]);
      }


      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword the &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function deleteGrantKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword the &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function setGrantKeywordPath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword the &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function addGrantKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function clearGrantType (options, callback) {
  // Implement you business logic here...


  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_type = '';
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Number} options.type the &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function setGrantType (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Number} options.type the &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function modifyGrantType (options, callback) {
  // Implement you business logic here...


  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_type= options.req.body.grant_type;
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.type the &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function setGrantTypePath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.type the &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function modifyGrantTypePath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function clearGrantUrls (options, callback) {
  // Implement you business logic here...


  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  
      grant.grant_url = [];
      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Array} options.urls The &#x60;Grant&#x60; urls
 * @param {Function} callback
 */
export function setGrantUrls (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.url The &#x60;Grant&#x60; url
 * @param {Function} callback
 */
export function addGrantUrl (options, callback) {
  // Implement you business logic here...


  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here  

      for(var i = 0, i<options.req.body.grant_url.length; i++){
          grant.grant_url.push(options.req.body.grant_url[i]);
      }

      grant.modified_date = new Date();


      grant.save(function(err){
        if(err){
          console.error(err);
        }
        res.json({message: 'This Grant has been updated'});
      })
      
    })
}

