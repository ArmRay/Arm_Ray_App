import express from 'express';
import Review from '../services/Review';

const router = express.Router();

/**
 * Creates &#x60;Review&#x60; objects. ****,
 * **reviewer_id**,
 *
 * **review_body** are 
 * required,
 *
 * all others optional.
 *
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  Review.createReview(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});



/**
 * Retrieves &#x60;Review&#x60; objects by **id**.
 *
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Review&#x60; objects. **id** is required,
 *
 * all others optional.
 *
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Review.updateReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Review&#x60; objects by **id**.
 *
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.deleteReviewById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets body of review
 *
 */
router.get('/:id/body', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewBodyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Review&#x60; body.
 *
 */
router.put('/:id/body', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Review.updateReviewBodyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Review&#x60; body.
 *
 */
router.post('/:id/body', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Review.setReviewBodyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Review&#x60; body
 *
 */
router.delete('/:id/body', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.deleteReviewBodyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets reviewer of review
 *
 */
router.get('/:id/reviewer', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewReviewerById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Review&#x60; reviewer
 *
 */
router.delete('/:id/reviewer', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.deleteReviewReviewer(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Is &#x60;User&#x60;the reviewer?
 *
 */
router.get('/:id/reviewer/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Review.isUserReviewReviewer(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Review&#x60; reviewer.
 *
 */
router.put('/:id/reviewer/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Review.updateReviewReviewerById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Review&#x60; reviewer.
 *
 */
router.post('/:id/reviewer/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Review.setReviewReviewerById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Review&#x60; reviewer
 *
 */
router.delete('/:id/reviewer/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Review.deleteReviewReviewerById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets rating of review
 *
 */
router.get('/:id/rating', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewRatingById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Review&#x60; rating
 *
 */
router.delete('/:id/rating', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.deleteReviewRating(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Is rating equal to what we pass in
 *
 */
router.get('/:id/rating/{rating}', (req, res, next) => {
  const options = {
    id: req.params.id,
    rating: req.params.rating
  };

  Review.isReviewRating(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Review&#x60; rating
 *
 */
router.put('/:id/rating/{rating}', (req, res, next) => {
  const options = {
    id: req.params.id,
    rating: req.params.rating
  };

  Review.updateReviewRating(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;Review&#x60; rating
 *
 */
router.post('/:id/rating/{rating}', (req, res, next) => {
  const options = {
    id: req.params.id,
    rating: req.params.rating
  };

  Review.setReviewRating(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets url of review
 *
 */
router.get('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewUrlById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Review&#x60; url
 *
 */
router.delete('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.deleteReviewUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Review&#x60; url
 *
 */
router.put('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Review.updateReviewUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets &#x60;Review&#x60; url
 *
 */
router.post('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Review.setReviewUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;Review&#x60;created date
 *
 */
router.get('/:id/created', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewCreatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Gets &#x60;Review&#x60;updated date
 *
 */
router.get('/:id/updated', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Review.getReviewUpdatedDateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
