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

/**
 * @param {Object} options
 * @param {String} options.name Name of &#x60;University&#x60;
 * @param {String} options.city City of &#x60;University&#x60;
 * @param {String} options.state state of &#x60;University&#x60;
 * @param {String} options.geolocation 2 item tuple representing lat/long of &#x60;University&#x60;; if not provided will be calculated based on city/state
 * @param {Array} options.project_ids ids of &#x60;Project&#x60; items at &#x60;University&#x60;
 * @param {Array} options.profile_images paths to profile images for &#x60;University&#x60;
 * @param {Function} callback
 */
export function createUniversity (options, callback) {
  let university = new University();

  university.university_name = options.req.body.name;
  university.profile_images = options.req.body.profile_images;
  university.geolocation = options.req.body.geolocation;
  university.city = options.req.body.city;
  university.state = options.req.body.state;
  university.project_ids = options.req.body.project_ids;
  university.created_date = new Date();
  university.updated_date = university.created_date;


  university.save(function(err) {
    if (err) {
      console.error(err);
    }
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;UserSkill&#x60; id
 * @param {Function} callback
 */
export function getUniversityById (options, callback) {
  University.findById(options.id, function(err, university){
    if(err){
      console.error(err);
    }
    res.status(200).json(university);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.name Name of &#x60;University&#x60;
 * @param {String} options.city City of &#x60;University&#x60;
 * @param {String} options.state state of &#x60;University&#x60;
 * @param {String} options.geolocation 2 item tuple representing lat/long of &#x60;University&#x60;; if not provided will be calculated based on city/state
 * @param {Array} options.project_ids ids of &#x60;Project&#x60; items at &#x60;University&#x60;
 * @param {Array} options.profile_images paths to profile images for &#x60;University&#x60;
 * @param {Function} callback
 */
export function updateUniversityById (options, callback) {
  University.findById(options.id, function(err, university) {
  if (err) {
    console.error(err);
  }

  university.university_name = options.req.body.name ? options.req.body.name : university.university_name;
  university.profile_images = options.req.body.profile_images ? options.req.body.profile_images : university.profile_images;
  university.geolocation = options.req.body.geolocation ? options.req.body.geolocation : university.geolocation;
  university.city = options.req.body.city ? options.req.body.city : university.city;
  university.state = options.req.body.state ? options.req.body.state : university.state;
  university.project_ids = options.req.body.project_ids ? options.req.body.project_ids : university.project_ids;
  university.created_date = new Date();
  university.updated_date = new Date();

  university.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })

})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityById (options, callback) {
  University.remove({
  _id: options.id
}, function(err, university) {
  if (err) {
    console.error(err);
  }
  res.json({
    message: 'This University has been deleted'
  });
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityNameById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.university_name);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityNameById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.university_name = null;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.name The &#x60;University&#x60; name
 * @param {Function} callback
 */
export function isUniversityNameById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.university_name == options.req.body.name);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.name The &#x60;University&#x60; name
 * @param {Function} callback
 */
export function updateUniversityNameById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.university_name = options.req.body.name;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.name The &#x60;University&#x60; name
 * @param {Function} callback
 */
export function setUniversityNameById (options, callback) {
  updateUniversityNameById (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityCityById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.city);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityCityById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.city = null;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.city The &#x60;University&#x60; city
 * @param {Function} callback
 */
export function isUniversityCityById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.city = options.req.body.city);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.city The &#x60;University&#x60; city
 * @param {Function} callback
 */
export function updateUniversityCityById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.city = options.req.body.city;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.city The &#x60;University&#x60; city
 * @param {Function} callback
 */
export function setUniversityCityById (options, callback) {
  updateUniversityCityById (options, callback)
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityStateById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.state);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityStateById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.state = null;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.state The &#x60;University&#x60; state
 * @param {Function} callback
 */
export function isUniversityStateById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.state = options.req.body.state);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.state The &#x60;University&#x60; state
 * @param {Function} callback
 */
export function updateUniversityStateById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.state = options.req.body.state;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.state The &#x60;University&#x60; state
 * @param {Function} callback
 */
export function setUniversityStateById (options, callback) {
  updateUniversityStateById (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityGeolocationById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.geolocation);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Number} options.lat The &#x60;University&#x60; latitude
 * @param {Number} options.long The &#x60;University&#x60; longitude
 * @param {Function} callback
 */
export function updateUniversityGeolocationByIdForm (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.geolocation[0] = options.req.body.lat ? options.req.body.lat : uni.geolocation[0];
  uni.geolocation[1] = options.req.body.long ? options.req.body.long : uni.geolocation[1];

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Number} options.lat The &#x60;University&#x60; latitude
 * @param {Number} options.long The &#x60;University&#x60; longitude
 * @param {Function} callback
 */
export function setUniversityGeolocationByIdForm (options, callback) {
  updateUniversityGeolocationByIdForm (options, callback)
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityGeolocationById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.geolocation = null;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Number} options.lat The &#x60;University&#x60; latitude
 * @param {Number} options.long The &#x60;University&#x60; longitude
 * @param {Function} callback
 */
export function isUniversityGeolocationById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }

    allMatch = true;
    res.status(200).json(uni.geolocation[0] == options.req.body.lat &&
      uni.geolocation[1] == options.req.body.long);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Number} options.lat The &#x60;University&#x60; latitude
 * @param {Number} options.long The &#x60;University&#x60; longitude
 * @param {Function} callback
 */
export function updateUniversityGeolocationById (options, callback) {
  updateUniversityGeolocationByIdForm (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Number} options.lat The &#x60;University&#x60; latitude
 * @param {Number} options.long The &#x60;University&#x60; longitude
 * @param {Function} callback
 */
export function setUniversityGeolocationById (options, callback) {
  updateUniversityGeolocationByIdForm (options, callback);
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityProjectsById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.project_ids);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityProjectsById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.project_ids = null;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Array} options.project_ids The &#x60;Project&#x60; ids
 * @param {Function} callback
 */
export function setUniversityProjectsById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.project_ids = options.req.body.project_ids;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Array} options.project_ids The &#x60;Project&#x60; ids
 * @param {Function} callback
 */
export function addUniversityProjectsById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();


  uni.geolocation = uni.geolocation.concat(options.req.body.project_ids);

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.project_id The &#x60;Project&#x60; id
 * @param {Function} callback
 */
export function isUniversityProjectsById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.project_ids.indexOf(options.req.body.project_id) > -1);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.project_id The &#x60;Project&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityProjectById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  let ndx = uni.project_ids.indexOf(options.req.body.project_id);
  if(ndx > -1){
    uni.project_ids.splice(ndx, 1);
  }

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.project_id The &#x60;Project&#x60; id
 * @param {Function} callback
 */
export function setUniversityProjectById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();


  uni.geolocation = [options.req.body.project_ids];

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.project_id The &#x60;Project&#x60; ids
 * @param {Function} callback
 */
export function addUniversityProjectById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();

  uni.project_ids = uni.project_ids.push(options.req.body.project_id);

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityimagesById (options, callback) {
  University.findById(options.id, function(err, uni){
    if(err){
      console.error(err);
    }
    res.status(200).json(uni.university_images);
  })
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function deleteUniversityImagesById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.profile_images = null;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Array} options.profile_image_paths The &#x60;University&#x60; profile image paths
 * @param {Function} callback
 */
export function setUniversityImagesById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.profile_images = options.req.body.profile_image_paths;

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Array} options.profile_image_paths The &#x60;University&#x60; profile image paths
 * @param {Function} callback
 */
export function addUniversityProfileImagesById (options, callback) {
  University.findById(options.id, function(err, uni) {
  if (err) {
    console.error(err);
  }

  uni.updated_date = new Date();
  uni.profile_images = uni.profile_images.concat(options.req.body.profile_image_paths);

  uni.save(function(err) {
    if (err) {
      console.error(err);
    }
    res.json({
      message: 'This University has been updated'
    });
  })
})
}
