import express from 'express';
import UserSkill from '../services/UserSkill';

const router = express.Router();

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

module.exports = router;
