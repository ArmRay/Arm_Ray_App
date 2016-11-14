import express from 'express';
import User from '../services/User';

const router = express.Router();

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

module.exports = router;
