import express from 'express';
import Reviews from '../services/Reviews';

const router = express.Router();

/**
 * Gets &#x60;Review&#x60; objects.
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

  Reviews.getReviewss(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Review&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date', (req, res, next) => {
  const options = {
  };

  Reviews.getReviewsByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Reviews&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/created_date/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  Reviews.getReviewsByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Review&#x60; objects modified on or later than given 
 * date
 * 
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  Reviews.getReviewssByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Review&#x60; objects created on or later than given 
 * date
 * 
 */
router.get('/modified_date/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  Reviews.getReviewsByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Review&#x60; objects with specified reviewer
 * 
 */
router.get('/reviewer/:user_id', (req, res, next) => {
  const options = {
    user_id: req.params.user_id
  };

  Reviews.getReviewsByReviewer(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Review&#x60; objects with a rating in the given range
 * 
 */
router.get('/rating', (req, res, next) => {
  const options = {
  };

  Reviews.getReviewsByRating(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Review&#x60; objects with a rating greater than or 
 * equal to **rating**
 * 
 */
router.get('/rating/min/:rating', (req, res, next) => {
  const options = {
    rating: req.params.rating
  };

  Reviews.getReviewsByMinRating(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
