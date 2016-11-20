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
      grant.modified_date = grant.created_date;

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

    Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      //Change grant values here
      grant.grant_type = options.req.body.grant_type ? options.req.body.grant_type : grant.grant_type;
      grant.grant_description = options.req.body.grant_description ? options.req.body.grant_description : grant.grant_description;
      grant.grant_amount = options.req.body.grant_amount ? options.req.body.grant_amount : grant.grant_amount;
      grant.grant_url = options.req.body.grant_url ? options.req.body.grant_url : grant.grant_url;
      grant.grant_keywords = options.req.body.grant_keywords ? options.req.body.grant_keywords : grant.grant_keywords;
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
  modifyGrantAmount (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Number} options.amount the &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function modifyGrantAmount (options, callback) {

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
  modifyGrantAmount (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.amount the &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function modifyGrantAmountPath (options, callback) {
  modifyGrantAmount (options, callback);
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
    modifyGrantDescription (options, callback);
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

    Grant.findById(options.id, function(err, grant){
        if(err){
          console.error(err);
        }

        grant.grant_keywords = [];

        for(var i = 0; i<options.req.body.grant_keywords.length; i++){
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
 * @param {Array} options.keywords the &#x60;Grant&#x60; keywords
 * @param {Function} callback
 */
export function addGrantKeywords (options, callback) {
  // Implement you business logic here...
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      for(var i = 0; i<options.req.body.grant_keywords.length; i++){
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
  Grant.findById(options.id, function(err, grant) {
    if (err) {
      console.error(err);
    }

    grant.updated_date = new Date();

    let ndx = grant.grant_keywords.indexOf(options.req.body.keyword);
    if(ndx > -1){
      grant.grant_keywords.splice(ndx, 1);
    }

    grant.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Grant has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword the &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function setGrantKeywordPath (options, callback) {
  Grant.findById(options.id, function(err, grant) {
    if (err) {
      console.error(err);
    }

    grant.updated_date = new Date();
    grant.grant_keywords = options.req.body.keyword;

    grant.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Grant has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword the &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function addGrantKeyword (options, callback) {
  Grant.findById(options.id, function(err, grant) {
    if (err) {
      console.error(err);
    }

    grant.updated_date = new Date();
    grant.grant_keywords.push(options.req.body.keyword);

    grant.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Grant has been updated'
      });
    })
  })
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
  modifyGrantType (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Number} options.type the &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function modifyGrantType (options, callback) {
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
  modifyGrantType (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.type the &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function modifyGrantTypePath (options, callback) {
  modifyGrantType (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function clearGrantUrls (options, callback) {

  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

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
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      grant.grant_url = options.req.body.urls;
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
 * @param {String} options.url The &#x60;Grant&#x60; url
 * @param {Function} callback
 */
export function addGrantUrl (options, callback) {
  // Implement you business logic here...

  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }

      for(var i = 0; i<options.req.body.grant_url.length; i++){
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

export function getGrantById (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant);
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantAmount (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.grant_amount);
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.amount The &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function isGrantAmount (options, callback) {
    Grant.findById(options.id, function(err, grant){
        if(err){
          console.error(err);
        }
        res.status(200).json(grant.grant_amount == options.req.body.amount);
      })
  }


/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantCreatedDate (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.created_date);
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantDescription (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.grant_description);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; keywords
 * @param {Function} callback
 */
export function getGrantKeywords (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.grant_keywords);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword The &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function isGrantHaveKeyword (options, callback) {
  Grant.findById(options.id, function(err, grant) {
    if (err) {
      console.error(err);
    }
    res.status(200).json(grant.grant_keywords.indexOf(options.req.body.keyword) > -1);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantModifiedDate (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.modified_date);
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; id
 * @param {Function} callback
 */
export function getGrantType (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.grant_type);
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.type The &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function isGrantType (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.grant_type == options.req.body.type);
    })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantUrl (options, callback) {
  Grant.findById(options.id, function(err, grant){
      if(err){
        console.error(err);
      }
      res.status(200).json(grant.grant_url);
    })
}


export function getGrants (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.keywords Keywords when searching for user
 * @param {Function} callback
 */
export function getGrantsByKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.keyword keyword to search for
 * @param {Function} callback
 */
export function getGrantsByKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getGrantsByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getGrantsByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of modification
 * @param {Function} callback
 */
export function getGrantsByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of creation
 * @param {Function} callback
 */
export function getGrantsByModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.minimum minimum &#x60;Grant&#x60;amount
 * @param {Number} options.maximum maximum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.type The &#x60;Grant&#x60;type
 * @param {Function} callback
 */
export function getGrantsByTypeForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.type The &#x60;Grant&#x60;type
 * @param {Function} callback
 */
export function getGrantsByType (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.amount minimum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByMinAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.amount maxiumum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByMaxAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.min maxiumum &#x60;Grant&#x60;amount
 * @param {Number} options.max maxiumum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByAmountRange (options, callback) {
  // Implement you business logic here...
}
