import express from 'express';
import User from '../services/User';

const router = express.Router();

/**
 * Creates &#x60;User&#x60; objects. &#x60;University&#x60; and &#x60;Project&#x60; are 
 * optional (user may not yet have affiliations)
 * 
 * &#x60;Keywords&#x60; also optional. All other fields required.
 * 
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  User.createUser(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates a &#x60;User&#x60; object. All fields other than &#x60;id&#x60; 
 * optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.updateUser(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete a &#x27;User&#x27; by their id.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve a &#x27;User&#x27; by their id.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Is &#x27;University&#x27; associated with a &#x60;User&#x60;?
 * 
 */
router.get('/:id/uni/{university_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    university_id: req.params.university_id
  };

  User.isUniversityOnUser(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add a &#x27;University&#x27; to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/uni/{university_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    university_id: req.params.university_id
  };

  User.settUserUniversityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;University&#x27; fromo a &#x60;User&#x60;.
 * 
 */
router.delete('/:id/uni/{university_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    university_id: req.params.university_id
  };

  User.deleteUserUniversityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve all &#x27;Project&#x27; associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/project', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getAllUserProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;Project&#x27; ojects from a &#x60;User&#x60;.
 * 
 */
router.delete('/:id/project', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteAllUserProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Is &#x27;Project&#x27; associated with a &#x60;User&#x60;?
 * 
 */
router.get('/:id/project/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  User.isUserOnProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add a &#x27;Project&#x27; to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/project/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  User.settUserProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;Project&#x27; from a &#x60;User&#x60;.
 * 
 */
router.delete('/:id/project/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  User.deleteUserProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve all &#x27;Review&#x27; associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/review', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getAllUserReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;Review&#x27; ojects from a &#x60;User&#x60;.
 * 
 */
router.delete('/:id/review', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteAllUserReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Is a &#x27;Review&#x27; associated with a &#x60;User&#x60;??
 * 
 */
router.get('/:id/review/{review_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    review_id: req.params.review_id
  };

  User.isReviewOnUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add a &#x27;Review&#x27; to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/review/{review_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    review_id: req.params.review_id
  };

  User.setUserReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;Review&#x27; from a &#x60;User&#x60;.
 * 
 */
router.delete('/:id/review/{review_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    review_id: req.params.review_id
  };

  User.deleteUserReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve all images associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getAllUserImages(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add images to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setUserImages(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove an image, or multiple images, from a &#x60;User&#x60;.
 * 
 */
router.delete('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.deleteImagesFromUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve all keywords associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getAllUserKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add keywords to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setUserKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete keywords from a user
 * 
 */
router.delete('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteKeywordsFromUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if a keyword is on a &#x60;User&#x60;.
 * 
 */
router.get('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  User.isUserHaveKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add a keyword to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  User.setUserKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete keyword from a user
 * 
 */
router.delete('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  User.deleteKeywordFromUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Skill&#x60;is associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/skills/{skill_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    skill_id: req.params.skill_id
  };

  User.getIsSkillOnUser(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Skill&#x60;on a &#x60;User&#x60;.
 * 
 */
router.post('/:id/skills/{skill_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    skill_id: req.params.skill_id
  };

  User.setUserSkill(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Skill&#x60;to a &#x60;User&#x60;.
 * 
 */
router.put('/:id/skills/{skill_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    skill_id: req.params.skill_id
  };

  User.addUserSkill(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete &#x60;Skill&#x60;from a user
 * 
 */
router.delete('/:id/skills/{skill_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    skill_id: req.params.skill_id
  };

  User.deleteSkillFromUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve all skills associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/skills', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getAllUserSkills(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set skills on a &#x60;User&#x60;.
 * 
 */
router.post('/:id/skills', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setUserSkills(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add skills to a &#x60;User&#x60;.
 * 
 */
router.put('/:id/skills', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.addUserSkills(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete skills from a user
 * 
 */
router.delete('/:id/skills', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteSkillsFromUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve first name associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/first_name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getFirstNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete first_name from a user
 * 
 */
router.delete('/:id/first_name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteUserFirstName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if first name is on &#x60;User&#x60;
 * 
 */
router.get('/:id/first_name/{first_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    first_name: req.params.first_name
  };

  User.isUserFirstName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add first name to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/first_name/{first_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    first_name: req.params.first_name
  };

  User.addUserFirstName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify first name of a &#x60;User&#x60;.
 * 
 */
router.put('/:id/first_name/{first_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    first_name: req.params.first_name
  };

  User.modifyUserFirstName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve first name associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/last_name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getLastNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete last_name from a user
 * 
 */
router.delete('/:id/last_name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteUserLastName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if last name is on &#x60;User&#x60;.
 * 
 */
router.get('/:id/last_name/{last_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    last_name: req.params.last_name
  };

  User.isUserLastName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add last name to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/last_name/{last_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    last_name: req.params.last_name
  };

  User.addUserLastName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify last name of a &#x60;User&#x60;.
 * 
 */
router.put('/:id/last_name/{last_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    last_name: req.params.last_name
  };

  User.modifyUserLastName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve if &#x60;User&#x60; is a collaborator.
 * 
 */
router.get('/:id/collaborator', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.isCollaboratorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * set if &#x60;User&#x60; is a collaborator.
 * 
 */
router.post('/:id/collaborator', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setIsUserCollaboratorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * set if &#x60;User&#x60; is a collaborator.
 * 
 */
router.put('/:id/collaborator', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setIsUserCollaboratorByIdPut(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve if &#x60;User&#x60; is a creator.
 * 
 */
router.get('/:id/creator', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.isCreatorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * set if &#x60;User&#x60; is a creator.
 * 
 */
router.post('/:id/creator', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setIsUserCreatorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * set if &#x60;User&#x60; is a creator.
 * 
 */
router.put('/:id/creator', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  User.setIsUserCreatorByIdPut(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve city associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/city', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getCityNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete city from a user
 * 
 */
router.delete('/:id/city', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteUserCity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if city is on &#x60;User&#x60;.
 * 
 */
router.get('/:id/city/{city}', (req, res, next) => {
  const options = {
    id: req.params.id,
    city: req.params.city
  };

  User.isUserCity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add city to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/city/{city}', (req, res, next) => {
  const options = {
    id: req.params.id,
    city: req.params.city
  };

  User.addUserCity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify city of a &#x60;User&#x60;.
 * 
 */
router.put('/:id/city/{city}', (req, res, next) => {
  const options = {
    id: req.params.id,
    city: req.params.city
  };

  User.modifyUserCity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve state associated with a &#x60;User&#x60;.
 * 
 */
router.get('/:id/state', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getStateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete state from a user
 * 
 */
router.delete('/:id/state', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.deleteUserState(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if state is on &#x60;User&#x60;.
 * 
 */
router.get('/:id/state/{state}', (req, res, next) => {
  const options = {
    id: req.params.id,
    state: req.params.state
  };

  User.isUserState(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add state to a &#x60;User&#x60;.
 * 
 */
router.post('/:id/state/{state}', (req, res, next) => {
  const options = {
    id: req.params.id,
    state: req.params.state
  };

  User.addUserState(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify state of a &#x60;User&#x60;.
 * 
 */
router.put('/:id/state/{state}', (req, res, next) => {
  const options = {
    id: req.params.id,
    state: req.params.state
  };

  User.modifyUserState(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve creation date of a &#x60;User&#x60;.
 * 
 */
router.get('/:id/created', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getCreatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve modified date of a &#x60;User&#x60;.
 * 
 */
router.get('/:id/modified', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  User.getModifiedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
