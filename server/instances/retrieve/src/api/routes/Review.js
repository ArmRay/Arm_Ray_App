import express from 'express';
import Review from '../services/Review';

const router = express.Router();

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

module.exports = router;
