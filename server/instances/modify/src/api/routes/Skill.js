import express from 'express';
import Skill from '../services/Skill';

const router = express.Router();

/**
 * Creates &#x60;Skill&#x60; objects.
 * 
 * Required query param of **size** determines
 * 
 * max number of results per page, and **page** determines
 * 
 * which page in the pagination we are. Remaining params 
 * optional.
 * 
 */
router.put('/', (req, res, next) => {
  const options = {
  };

  Skill.createSkills(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Skill&#x60; objects by **id**.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Skill.deleteSkillwById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Skill&#x60; objects. **id** is required,
 * 
 * all others optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Skill.updateSkillById(options, (err, data) => {
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
router.delete('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Skill.deleteSkillDescriptionByIdForn(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Skill&#x60; body.
 * 
 */
router.post('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Skill.setSkillDescriptionByIdForn(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Skill&#x60; description.
 * 
 */
router.put('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Skill.updateSkillDescriptionByIdForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Skill&#x60; body.
 * 
 */
router.post('/:id/description/{description}', (req, res, next) => {
  const options = {
    id: req.params.id,
    description: req.params.description
  };

  Skill.setSkillDescriptionById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Skill&#x60; description.
 * 
 */
router.put('/:id/description/{description}', (req, res, next) => {
  const options = {
    id: req.params.id,
    description: req.params.description
  };

  Skill.updateSkillDescriptionById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
