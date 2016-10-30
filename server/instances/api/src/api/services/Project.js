/**
 * @param {Object} options
 * @param {String} options.project_name Project&#x27;s name
 * @param {String} options.project_main_grant_type Project&#x27;s &#x60;Grant&#x60;type
 * @param {String} options.project_description Description of project
 * @param {Array} options.project_creator_id array of &#x60;Project&#x60;creator ids
 * @param {Array} options.project_collaborators_id array of &#x60;Project&#x60;collaborator ids
 * @param {Array} options.project_keywords array of &#x60;Project&#x60;keywords
 * @param {Array} options.project_urls array of &#x60;Project&#x60;URLs
 * @param {Array} options.grant_ids The &#x60;Grant&#x60; IDs
 * @param {String} options.university_id ID of &#x60;University&#x60;hosting research
 * @param {String} options.grant_facilitator Name of individual fascilitating &#x60;Grant&#x60;funding
 * @param {Array} options.project_file files for grant
 * @param {Array} options.reviews reviews
 * @param {Array} options.posts posts related to project
 * @param {Boolean} options.is_project_private is &#x60;Project&#x60;private?
 * @param {Function} callback
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


export function createProject (options, callback) {
  let project = new Project();

  project.project_name = options.req.body.project_name;
  project.project_description = options.req.body.project_description;
  project.university_id = options.req.body.university_id;
  project.grant_facilitator = options.req.body.grant_facilitator;
  project.posts_id = options.req.body.posts_id;
  project.project_collaborators_id = options.req.body.project_collaborators_id;
  project.grants_id = options.req.body.grants_id;
  project.project_file = options.req.body.project_file;
  project.reviews_id = options.req.body.reviews_id;
  project.project_keywords = options.req.body.project_keywords;
  project.project_creator_id = options.req.body.project_creator_id;
  project.project_urls = options.req.body.project_urls;
  project.created_date: new Date();
  project.updated_date: project.created_date;
  project.is_project_private = options.req.body.is_project_private;

  project.save(function(err) {
    if (err) {
      console.error(err);
    }
  })

}

/**
 * @param {Object} options
 * @param {String} options.id the &#x60;id&#x60; of the &#x60;Project&#x60; to delete
 * @param {Function} callback
 */
export function deleteProjectById (options, callback) {
  Project.remove({
    _id: options.id
  }, function(err, project) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This Project has been deleted'
    });
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Project&#x60;id
 * @param {String} options.project_name Project&#x27;s name
 * @param {String} options.project_main_grant_type Project&#x27;s &#x60;Grant&#x60;type
 * @param {String} options.project_description Description of project
 * @param {Array} options.project_creator_id array of &#x60;Project&#x60;creator ids
 * @param {Array} options.project_collaborators_id array of &#x60;Project&#x60;collaborator ids
 * @param {Array} options.project_keywords array of &#x60;Project&#x60;keywords
 * @param {Array} options.project_urls array of &#x60;Project&#x60;URLs
 * @param {Array} options.grant_id The &#x60;Grant&#x60; IDs
 * @param {String} options.university_id ID of &#x60;University&#x60;hosting research
 * @param {String} options.grant_facilitator Name of individual fascilitating &#x60;Grant&#x60;funding
 * @param {Array} options.project_file files for grant
 * @param {Array} options.reviews reviews
 * @param {Array} options.posts posts related to project
 * @param {Boolean} options.is_project_private is &#x60;Project&#x60;private?
 * @param {Function} callback
 */
export function updateProject (options, callback) {
  Project.findById(options.id, function(err, post) {
    if (err) {
      console.error(err);
    }

    project.project_name = options.req.body.project_name ? options.req.body.project_name : project.project_name;
    project.project_description = options.req.body.project_description ? options.req.body.project_description : project.project_description;
    project.university_id = options.req.body.university_id ? options.req.body.university_id : project.university_id;
    project.grant_facilitator = options.req.body.grant_facilitator ? options.req.body.grant_facilitator : project.grant_facilitator;
    project.posts_id = options.req.body.posts ? options.req.body.posts : project.posts_id;
    project.project_collaborators_id = options.req.body.project_collaborators_id ? options.req.body.project_collaborators_id : project.project_collaborators_id;
    project.grants_id = options.req.body.grant_id ? options.req.body.grants_id : project.grants_id;
    project.project_file = options.req.body.project_file ? options.req.body.project_file : project.project_file;
    project.reviews_id = options.req.body.reviews ? options.req.body.reviews : project.reviews_id;
    project.project_keywords = options.req.body.project_keywords ? options.req.body.project_keywords : project.project_keywords;
    project.project_creator_id = options.req.body.project_creator_id ? options.req.body.project_creator_id : project.project_creator_id;
    project.project_urls = options.req.body.project_urls ? options.req.body.project_urls : project.project_urls;
    project.updated_date = new Date();
    project.is_project_private = options.req.body.is_project_private ? options.req.body.is_project_private : project.is_project_private;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })

  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectCollaborators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_collaborators_id = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.collaborators The &#x60;ids&#x60; of the ollaborators
 * @param {Function} callback
 */
export function setAllProjectCollaborators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_collaborators_id = options.req.body.collaborators;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.collaborators The &#x60;ids&#x60; of the collaborators
 * @param {Function} callback
 */
export function addProjectCollaborators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_collaborators_id.push(options.req.body.collaborators);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the collaborator
 * @param {Function} callback
 */
export function deleteProjectCollaborator (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    let ndx = project.project_collaborators_id.indexOf(options.req.body.id);
    if(ndx > -1){
      project.project_collaborators_id.splice(ndx, 1);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;id&#x60; of the collaborator
 * @param {Function} callback
 */
export function setProjectCollaborators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_collaborators_id = options.req.body.user_id;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the collaborator
 * @param {Function} callback
 */
export function addProjectCollaborator (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_collaborators_id.push(options.req.body.user_id);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectCreators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_creator_id = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.creators The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function setAllProjectCreators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_creator_id = options.req.body.creators;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.creators The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function addProjectCreators (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_creator_id = project.project_creator_id.concat(options.req.body.creators)

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function deleteProjectCreator (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    let ndx = project.project_creator_id.indexOf(options.req.body.user_id);
    if(ndx > -1){
      project.project_creator_id.splice(ndx, 1);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;id&#x60; of the creator
 * @param {Function} callback
 */
export function setProjectCreator (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    if(user_id.constructor == Array){
      project.project_creator_id = user_id;
    }else {
      project.project_creator_id = []
      project.project_creator_id.push(user_id);

    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function addProjectCreator (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_creator_id.push(user_id);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectDescription (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_description = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_description The project_description
 * @param {Function} callback
 */
export function setProjectDescription (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_description = options.req.body.project_description;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })

}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_description The project_description
 * @param {Function} callback
 */
export function modifyProjectDescription (options, callback) {
  setProjectDescription (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectFiles (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_files = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.files The &#x60;files&#x60; of the project
 * @param {Function} callback
 */
export function setAllProjectFiles (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_files = options.req.body.files;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.urls The &#x60;files&#x60; of the &#x60;Project&#x60;&#x60;
 * @param {Function} callback
 */
export function addProjectFiles (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    if(project.project_files.constructor != Array) {
      project.project_files = []
    }
    project.project_files = project.project_files.concat(options.req.body.files);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}


/*TODO
*This iis going to need to be revisted as it assumes a sungle grant per project
*/
/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectGrant (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_grant = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/*TODO
*This iis going to need to be revisted as it assumes a sungle grant per project
*/
/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.grant_id The grant_id
 * @param {Function} callback
 */
export function setProjectGrant (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_grant = options.req.body.grant_id;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}
/*TODO
*This iis going to need to be revisted as it assumes a sungle grant per project
*/
/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.grant_id The grant_id
 * @param {Function} callback
 */
export function modifyProjectGrant (options, callback) {
  setProjectGrant (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectKeywords (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.keywords = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.keywords The &#x60;keywords&#x60; of the &#x60;Project&#x60;&#x60;
 * @param {Function} callback
 */
export function setAllProjectKeywords (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.keywords = options.req.body.keywords;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.keywords The &#x60;ids&#x60; of the collaborators
 * @param {Function} callback
 */
export function addProjectKeywords (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    if(project.keywords.constructor != Array) {
      project.keywords = []
    }
    project.keywords = project.keywords.concat(options.req.body.keywords);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function deleteProjectKeyword (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    let ndx = project.keywords.indexOf(options.req.body.keyword);
    if(ndx > -1){
      project.keywords.splice(ndx, 1);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.keyword The &#x60;keyword&#x60;
 * @param {Function} callback
 */
export function setProjectKeyword (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();

    if(options.req.body.keyword.constructor == Array) {
      project.keywords = options.req.body.keyword
    }else {
      project.keywords = []
      project.keywords.push(options.req.body.keyword);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function addProjectKeyword (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.keywords.push(options.req.body.keyword);


    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_name The project_name
 * @param {Function} callback
 */
export function addProjectName (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_name = options.req.body.project_name;


    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_name The project_name
 * @param {Function} callback
 */
export function modifyProjectName (options, callback) {
  addProjectName (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectPosts (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_posts = [];


    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.posts The &#x60;ids&#x60; of the posts
 * @param {Function} callback
 */
export function setAllProjectPosts (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_posts = options.req.body.posts;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.reviews The &#x60;ids&#x60; of the posts
 * @param {Function} callback
 */
export function addProjectPosts (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_posts = project.project_posts.concat(options.req.body.posts);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.post_id The &#x60;ids&#x60; of the post
 * @param {Function} callback
 */
export function deleteProjectPost (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    let ndx = project.posts_id.indexOf(options.req.body.post_id);
    if(ndx > -1){
      project.posts_id.splice(ndx, 1);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.post_id The &#x60;id&#x60; of the post
 * @param {Function} callback
 */
export function addProjectPost (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.posts_id.push(options.req.body.post_id);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Boolean} options.is_private is &#x60;Project&#x60;private?
 * @param {Function} callback
 */
export function setIsProjectPrivate (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.is_post_private = options.req.body.is_private;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserProjectName (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_name = null;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectReviews (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.reviews_id = [];

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.reviews The &#x60;ids&#x60; of the reviews
 * @param {Function} callback
 */
export function setAllProjectReviews (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.reviews_id = options.req.body.reviews;

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.reviews The &#x60;ids&#x60; of the reviews
 * @param {Function} callback
 */
export function addProjectReviews (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.reviews_id = project.reviews_id.concat(options.req.body.reviews);

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.review_id The &#x60;ids&#x60; of the review
 * @param {Function} callback
 */
export function deleteProjectReview (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    let ndx = project.reviews_id.indexOf(options.req.body.review_id);
    if(ndx > -1){
      project.reviews_id.splice(ndx, 1);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.review_id The &#x60;id&#x60; of the review
 * @param {Function} callback
 */
export function addProjectReview (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    let ndx = project.reviews_id.indexOf(options.req.body.review_id);
    if(!(ndx > -1)){
      project.reviews_id.push(options.req.body.review_id);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}



/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjecUniversities (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.university_id = []

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.university_id The university_id
 * @param {Function} callback
 */
export function setProjectUniversity (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    if(options.req.body.university_id.constructor == Array) {
      project.university_id = options.req.body.university_id;
    }else {
      project.university_id = []
      project.university_id.push(options.req.body.university_id);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.university_id The university_id
 * @param {Function} callback
 */
export function modifyProjectUniversity (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }


    project.updated_date = new Date();
    if(options.req.body.university_id.constructor == Array) {
      project.university_id = project.university_id.concat(options.req.body.university_id);
    }else {
      project.university_id.push(options.req.body.university_id);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectUrls (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();
    project.project_urls = [];

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.urls The &#x60;urls&#x60; of the project
 * @param {Function} callback
 */
export function setAllProjectUrls (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();

    if(options.req.body.project_urls.constructor == Array) {
      project.project_urls = options.req.body.project_urls;
    }else {
      project.project_urls = [];
      project.project_urls.push(options.req.body.project_urls);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.urls The &#x60;urls&#x60; of the &#x60;Project&#x60;&#x60;
 * @param {Function} callback
 */
export function addProjectUrls (options, callback) {
  Project.findById(options.id, function(err, project) {
    if (err) {
      console.error(err);
    }

    project.updated_date = new Date();

    if(options.req.body.project_urls.constructor == Array) {
      project.project_urls = project.project_urls.concat(options.req.body.project_urls);
    }else {
      project.project_urls.push(options.req.body.project_urls);
    }

    project.save(function(err) {
      if (err) {
        console.error(err);
      }
      res.json({
        message: 'This Project has been updated'
      });
    })
  })
}

export function getProjectById (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectCollaborators (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_collaborators_id);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
* @param {String} options.user_id The &#x60;User&#x60;id
* @param {Function} callback
*/
export function isUserCollaboratorOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_collaborators_id.indexOf(options.req.body.user_id) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectCreators (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_collaborators_id);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
* @param {String} options.user_id The &#x60;User&#x60;id
* @param {Function} callback
*/
export function isUserCreatorOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_creators_id.indexOf(options.req.body.user_id) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getProjectDescriptionById (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_description);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {String} options.project_description The &#x60;project_description&#x60; of the &#x60;Project&#x60;
* @param {Function} callback
*/
export function isProjectDescriptionOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_description == options.req.body.project_description);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectFiles (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_files);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getProjectGrantById (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.grants_id);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {String} options.grant_id The &#x60;grant_id&#x60; of the &#x60;Project&#x60;
* @param {Function} callback
*/
export function isGrantOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.grants_id.indexOf(options.req.body.grant_id) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectKeywords (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_keywords);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
* @param {String} options.keyword The keyword
* @param {Function} callback
*/
export function isKeywordOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_keywords.indexOf(options.req.body.keyword) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {String} options.project_name The &#x60;project_name&#x60; of the &#x60;Project&#x60;
* @param {Function} callback
*/
export function isNameOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_name == options.req.body.project_name);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectPosts (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.posts_id);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {String} options.post_id The &#x60;id&#x60; of the post
* @param {Function} callback
*/
export function isPostOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.posts_id.indexOf(options.req.body.post_id) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function isProjectPrivate (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.is_project_private);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getProjectNameById (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_name);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectReviews (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.reviews_id);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {String} options.review_id The &#x60;id&#x60; of the review
* @param {Function} callback
*/
export function isReviewOnOProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.reviews_id.indexOf(options.req.body.review_id) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getUniversitiesById (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.university_id);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {String} options.university_id The id of the &#x60;University&#x60;
* @param {Function} callback
*/
export function isUniversityOnProject (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.university_id.indexOf(options.req.body.university_id) > -1);
    })
}

/**
* @param {Object} options
* @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
* @param {Function} callback
*/
export function getAllProjectUrls (options, callback) {
  Project.findById(options.id, function(err, project){
      if(err){
        console.error(err);
      }
      res.status(200).json(project.project_urls);
    })
}


export function getProjects (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.university_id ID of &#x27;User&#x27; to fetch
* @param {Function} callback
*/
export function getProjectsByUniversityId (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.user_id ID of &#x27;User&#x27; to fetch
* @param {Function} callback
*/
export function getProjectsByCreatorId (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.user_id ID of &#x27;User&#x27; to fetch
* @param {Function} callback
*/
export function getProjectsByCollaboratorId (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.grant_id ID of &#x27;User&#x27; to fetch
* @param {Function} callback
*/
export function getProjectsByGrantId (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.created_date date of creation
* @param {Function} callback
*/
export function getProjectsByCreatedDateForm (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.created_date date of creation
* @param {Function} callback
*/
export function getProjectsByCreatedDate (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.modified_date date modified
* @param {Function} callback
*/
export function getProjectsByModifiedDateForm (options, callback) {
 // Implement you business logic here...
}

/**
* @param {Object} options
* @param {String} options.modified_date date modified
* @param {Function} callback
*/
export function getProjectsByModifiedDate (options, callback) {
 // Implement you business logic here...
}
