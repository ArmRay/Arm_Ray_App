import express from 'express';
import UserSkill from '../services/UserSkill';

const router = express.Router();

/**
 * Creates &#x60;UserSkill&#x60; objects. **user_id** and **skill_id** 
 * are required, **endorsements** optional.
 * 
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  UserSkill.createUserSkill(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;UserSkill&#x60; object by **id**.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.getUserSkillById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;UserSkill&#x60; objects. **id** is required,
 * 
 * all others optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  UserSkill.updateUserSkillById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;UserSkill&#x60; objects by **id**.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.deleteUserSkillwById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;Skill&#x60;
 * 
 */
router.get('/:id/skill', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.getUSerSkillSkillById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Skill&#x60; body
 * 
 */
router.delete('/:id/skill', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.deleteUserSkillSkilById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Skill&#x60; contained in &#x60;UserSkill&#x60; . 
 * 
 */
router.put('/:id/skill/{skill_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    skill_id: req.params.skill_id
  };

  UserSkill.updateUserSkillSkill(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;UserSkill&#x60; body. 
 * 
 */
router.post('/:id/skill/{skill_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    skill_id: req.params.skill_id
  };

  UserSkill.setUserSkillSkillDescriptionById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;user&#x60;
 * 
 */
router.get('/:id/user', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.getUserSkillUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Skill&#x60; body
 * 
 */
router.delete('/:id/user', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.deleteUserSkillUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;User&#x60; contained in &#x60;UserSkill&#x60; . 
 * 
 */
router.put('/:id/user/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  UserSkill.updateUserSkillUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;User&#x60; on &#x60;UserSkill&#x60; . 
 * 
 */
router.post('/:id/user/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  UserSkill.setUserSkillUserById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;User&#x60; ndorsements in &#x60;UserSkill&#x60; . 
 * 
 */
router.get('/:id/endorsement', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.getUserSkillEndorsementById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;User&#x60; on &#x60;UserSkill&#x60; . 
 * 
 */
router.post('/:id/endorsement', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  UserSkill.setUserSkillEndorsementsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;User&#x60; objects on &#x60;UserSkill&#x60; . 
 * 
 */
router.put('/:id/endorsement', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  UserSkill.addUserSkillEndorsementsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x60;User&#x60; endorsement on &#x60;UserSkill&#x60; . 
 * 
 */
router.delete('/:id/endorsement', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.removeUserSkillEndorsementsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds &#x60;User&#x60; to endorsements in &#x60;UserSkill&#x60; . 
 * 
 */
router.put('/:id/endorsement/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  UserSkill.addUserSkillEndorsementById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;User&#x60; on &#x60;UserSkill&#x60; . 
 * 
 */
router.post('/:id/endorsement/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  UserSkill.setUserSkillEndorsementById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove &#x60;User&#x60; endorsement on &#x60;UserSkill&#x60; . 
 * 
 */
router.delete('/:id/endorsement/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  UserSkill.removeUserSkillEndorsementById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;UserSkill&#x60; created date
 * 
 */
router.get('/:id/created', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.getUserSkillCreatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;UserSkill&#x60; updated date
 * 
 */
router.get('/:id/updated', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  UserSkill.getUserSkillUpdatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
