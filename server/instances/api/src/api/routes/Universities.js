import express from 'express';
import Universities from '../services/Universities';

const router = express.Router();

/**
 * Gets &#x60;University&#x60; objects.
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

  Universities.getUniversities(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  Universities.getUniversitiesByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects modified on or later than 
 * given date
 * 
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/modified_date/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  Universities.getUniversitiesByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified name
 * 
 */
router.get('/name/:name', (req, res, next) => {
  const options = {
    name: req.params.name
  };

  Universities.getUniversitiesByName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified name
 * 
 */
router.get('/name', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByNameForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified city
 * 
 */
router.get('/city/:city', (req, res, next) => {
  const options = {
    city: req.params.city
  };

  Universities.getUniversitiesByCity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified city
 * 
 */
router.get('/city', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByCityForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified state
 * 
 */
router.get('/state/:state', (req, res, next) => {
  const options = {
    state: req.params.state
  };

  Universities.getUniversitiesByState(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified state
 * 
 */
router.get('/state', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByStateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified geolocation; 
 * radius is optional, defaults to 25 miles
 * 
 */
router.get('/geolocation', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByGeolocationForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified geolocation; 
 * radius is optional, defaults to 25 miles
 * 
 */
router.get('/geolocation/:lat/{long}', (req, res, next) => {
  const options = {
    lat: req.params.lat,
    long: req.params.long,
  };

  Universities.getUniversitiesByGeolocationFormAndPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified geolocation and 
 * radius
 * 
 */
router.get('/geolocation/:lat/{long}/{radius}', (req, res, next) => {
  const options = {
    lat: req.params.lat,
    long: req.params.long,
    radius: req.params.radius
  };

  Universities.getUniversitiesByGeolocationPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified &#x60;Project&#x60;id
 * 
 */
router.get('/projects/:project_id', (req, res, next) => {
  const options = {
    project_id: req.params.project_id
  };

  Universities.getUniversitiesByProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;University&#x60; objects with specified projects
 * 
 */
router.get('/projects', (req, res, next) => {
  const options = {
  };

  Universities.getUniversitiesByProjectsForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
