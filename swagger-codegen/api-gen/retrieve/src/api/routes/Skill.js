import express from 'express';
import Skill from '../services/Skill';

const router = express.Router();

/**
 * Retrieves &#x60;Skill&#x60; objects by **id**.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Skill.getSkillById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;Skill&#x60; created date
 * 
 */
router.get('/:id/created', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Skill.getSkillCreatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets description of &#x60;Skill&#x60;
 * 
 */
router.get('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Skill.getSkillBodyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets if description of &#x60;Skill&#x60; is on &#x60;Skill&#x60;
 * 
 */
router.get('/:id/description/{description}', (req, res, next) => {
  const options = {
    id: req.params.id,
    description: req.params.description
  };

  Skill.getIsSkillBodyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;Skill&#x60; updated date
 * 
 */
router.get('/:id/updated', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Skill.getSkillUpdatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
