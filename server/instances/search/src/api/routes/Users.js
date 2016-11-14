import express from 'express';
import Users from '../services/Users';

const router = express.Router();

/**
 * Gets &#x60;User&#x60; objects.
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

  Users.getUsers(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects at a particular &#x60;University&#x60;
 * 
 */
router.get('/uni/:university_id', (req, res, next) => {
  const options = {
    university_id: req.params.university_id,
  };

  Users.getUsersByUniversityId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects on a particular &#x60;Project&#x60;
 * 
 */
router.get('/projects/:project_id', (req, res, next) => {
  const options = {
    project_id: req.params.project_id,
  };

  Users.getUsersByProjectId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects created on or after the given date
 * 
 */
router.get('/created/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  Users.getUsersByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects created on or after the given date2
 * 
 */
router.get('/created', (req, res, next) => {
  const options = {
  };

  Users.getUsersByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects created on or after the given date
 * 
 */
router.get('/modified/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  Users.getUsersByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects created on or after the given date
 * 
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  Users.getUsersByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects based on keywords
 * 
 */
router.get('/keys', (req, res, next) => {
  const options = {
  };

  Users.getUsersByKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;User&#x60; objects based on skills
 * 
 */
router.get('/skills', (req, res, next) => {
  const options = {
  };

  Users.getUsersBySkills(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
