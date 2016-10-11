import express from 'express';
import Projects from '../services/Projects';

const router = express.Router();

/**
 * Gets &#x60;Project&#x60; objects.
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

  Projects.getProjects(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects at a particular &#x60;University&#x60;
 * 
 */
router.get('/uni/:university_id', (req, res, next) => {
  const options = {
    university_id: req.params.university_id
  };

  Projects.getProjectsByUniversityId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects by a particular creator &#x60;User&#x60;
 * 
 */
router.get('/creator/:user_id', (req, res, next) => {
  const options = {
    user_id: req.params.user_id
  };

  Projects.getProjectsByCreatorId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects by a particular collaborator 
 * &#x60;User&#x60;
 * 
 */
router.get('/collaborator/:user_id', (req, res, next) => {
  const options = {
    user_id: req.params.user_id
  };

  Projects.getProjectsByCollaboratorId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects associated with a particular 
 * &#x60;Grant&#x60;
 * 
 */
router.get('/grant/:grant_id', (req, res, next) => {
  const options = {
    grant_id: req.params.grant_id
  };

  Projects.getProjectsByGrantId(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date', (req, res, next) => {
  const options = {
  };

  Projects.getProjectsByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  Projects.getProjectsByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects modified on or later than given 
 * date
 * 
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  Projects.getProjectsByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects modified on or later than given 
 * date
 * 
 */
router.get('/modified_date/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  Projects.getProjectsByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
