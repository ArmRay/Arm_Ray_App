import express from 'express';
import University from '../services/University';

const router = express.Router();

/**
 * Creates &#x60;University&#x60; objects. **name**, **city**, and 
 * **state** are required, all others optional.
 * 
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  University.createUniversity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

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
 * Updates &#x60;University&#x60; objects. **id** is required,
 * 
 * all others optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.updateUniversityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;University&#x60; objects by **id**.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityById(options, (err, data) => {
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
 * Deletes &#x60;University&#x60; name
 * 
 */
router.delete('/:id/name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityNameById(options, (err, data) => {
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
 * Updates &#x60;University&#x60; name
 * 
 */
router.put('/:id/name/{name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    name: req.params.name
  };

  University.updateUniversityNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; name
 * 
 */
router.post('/:id/name/{name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    name: req.params.name
  };

  University.setUniversityNameById(options, (err, data) => {
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
 * Deletes &#x60;University&#x60; city
 * 
 */
router.delete('/:id/city', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityCityById(options, (err, data) => {
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
 * Updates &#x60;University&#x60; city
 * 
 */
router.put('/:id/city/{city}', (req, res, next) => {
  const options = {
    id: req.params.id,
    city: req.params.city
  };

  University.updateUniversityCityById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; city
 * 
 */
router.post('/:id/city/{city}', (req, res, next) => {
  const options = {
    id: req.params.id,
    city: req.params.city
  };

  University.setUniversityCityById(options, (err, data) => {
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
 * Deletes &#x60;University&#x60; state
 * 
 */
router.delete('/:id/state', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityStateById(options, (err, data) => {
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

/**
 * Updates &#x60;University&#x60; state
 * 
 */
router.put('/:id/state/{state}', (req, res, next) => {
  const options = {
    id: req.params.id,
    state: req.params.state
  };

  University.updateUniversityStateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; state
 * 
 */
router.post('/:id/state/{state}', (req, res, next) => {
  const options = {
    id: req.params.id,
    state: req.params.state
  };

  University.setUniversityStateById(options, (err, data) => {
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
 * Updates &#x60;University&#x60; geolocation
 * 
 */
router.put('/:id/geolocation', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.updateUniversityGeolocationByIdForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; geolocation
 * 
 */
router.post('/:id/geolocation', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.setUniversityGeolocationByIdForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;University&#x60; geolocation
 * 
 */
router.delete('/:id/geolocation', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityGeolocationById(options, (err, data) => {
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
 * Updates &#x60;University&#x60; geolocation
 * 
 */
router.put('/:id/geolocation/{lat}/{long}', (req, res, next) => {
  const options = {
    id: req.params.id,
    lat: req.params.lat,
    long: req.params.long
  };

  University.updateUniversityGeolocationById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; state
 * 
 */
router.post('/:id/geolocation/{lat}/{long}', (req, res, next) => {
  const options = {
    id: req.params.id,
    lat: req.params.lat,
    long: req.params.long
  };

  University.setUniversityGeolocationById(options, (err, data) => {
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
 * Deletes &#x60;University&#x60; projects
 * 
 */
router.delete('/:id/projects', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityProjectsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; projects
 * 
 */
router.post('/:id/projects', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.setUniversityProjectsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds &#x60;University&#x60; projects
 * 
 */
router.put('/:id/projects', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.addUniversityProjectsById(options, (err, data) => {
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
 * Deletes &#x60;Project&#x60; from &#x60;University&#x60; 
 * 
 */
router.delete('/:id/projects/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  University.deleteUniversityProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; projects to this single &#x60;Project&#x60;(probably 
 * will never use this)
 * 
 */
router.post('/:id/projects/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  University.setUniversityProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds &#x60;University&#x60; project
 * 
 */
router.put('/:id/projects/{project_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_id: req.params.project_id
  };

  University.addUniversityProjectById(options, (err, data) => {
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
 * Deletes &#x60;University&#x60; images
 * 
 */
router.delete('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  University.deleteUniversityImagesById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;University&#x60; profile image paths
 * 
 */
router.post('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.setUniversityImagesById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds &#x60;University&#x60; projects
 * 
 */
router.put('/:id/images', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  University.addUniversityProfileImagesById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
