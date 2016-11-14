import express from 'express';
import University from '../services/University';

const router = express.Router();

/**
 * Retrieves &#x60;University&#x60; object by **id**.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;University&#x60; city
 * 
 */
router.get('/:id/city', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityCityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets if the &#x60;University&#x60; city matches the parameter
 * 
 */
router.get('/:id/city/{city}', (req, res, next) => {
  const options = {
    id: req.params.id,
    city: req.params.city
  };

  University.isUniversityCityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;University&#x60; geolocation
 * 
 */
router.get('/:id/geolocation', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityGeolocationById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets if the &#x60;University&#x60; geolocation the parameters
 * 
 */
router.get('/:id/geolocation/{lat}/{long}', (req, res, next) => {
  const options = {
    id: req.params.id,
    lat: req.params.lat,
    long: req.params.long
  };

  University.isUniversityGeolocationById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;University&#x60; images
 * 
 */
router.get('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityimagesById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;University&#x60; name
 * 
 */
router.get('/:id/name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets if the &#x60;University&#x60; name matches the parameter
 * 
 */
router.get('/:id/name/{name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    name: req.params.name
  };

  University.isUniversityNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;University&#x60; projects
 * 
 */
router.get('/:id/projects', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityProjectsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets if the &#x60;University&#x60; has the &#x60;Project&#x60;
 * 
 */
router.get('/:id/projects/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  University.isUniversityProjectsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets the &#x60;University&#x60; state
 * 
 */
router.get('/:id/state', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.getUniversityStateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets if the &#x60;University&#x60; state matches the parameter
 * 
 */
router.get('/:id/state/{state}', (req, res, next) => {
  const options = {
    id: req.params.id,
    state: req.params.state
  };

  University.isUniversityStateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
