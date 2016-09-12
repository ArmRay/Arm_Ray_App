import express from 'express';
import UserSkills from '../services/UserSkills';

const router = express.Router();

/**
 * Gets &#x60;UserSkill&#x60; objects.
 * 
 * Required query param of **size** determines
 * 
 * max number of results per page, and **page** determines
 * 
 * which page in the pagination we are. Remaining params 
 * optional.
 * 
 */
router.get('/', (req, res, next) => {
  const options = {
  };

  UserSkills.getUserSkills(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date', (req, res, next) => {
  const options = {
  };

  UserSkills.getUserSkillsByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  UserSkills.getUserSkillsByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects modified on or later than given 
 * date
 * 
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  UserSkills.getUserSkillsByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/modified_date/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  UserSkills.getUserSkillsByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects with specified description
 * 
 */
router.get('/user/:user_id', (req, res, next) => {
  const options = {
    user_id: req.params.user_id
  };

  UserSkills.getUserSkillByUser(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects with a specific &#x60;Skill&#x60; id
 * 
 */
router.get('/description/skill/:skill_id', (req, res, next) => {
  const options = {
    skill_id: req.params.skill_id
  };

  UserSkills.getUserSkillsbySkillId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects with a specific set of &#x60;Skill&#x60; 
 * ids
 * 
 */
router.get('/description/skill', (req, res, next) => {
  const options = {
  };

  UserSkills.getUserSkillsbySkillIds(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects endorsed by a specific &#x60;User&#x60;
 * 
 */
router.get('/description/endorsements/:user_id', (req, res, next) => {
  const options = {
    user_id: req.params.user_id
  };

  UserSkills.getUserSkillsbyEndorsementId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;UserSkill&#x60; objects endorsed by a specific set of 
 * &#x60;User&#x60; obejects
 * 
 */
router.get('/description/endorsements', (req, res, next) => {
  const options = {
  };

  UserSkills.getUserSkillsbyEndorsementIds(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
