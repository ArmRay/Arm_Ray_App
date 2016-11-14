import express from 'express';
import Review from '../services/Review';

const router = express.Router();

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

module.exports = router;
