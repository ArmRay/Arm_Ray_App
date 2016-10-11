import express from 'express';
import Grants from '../services/Grants';

const router = express.Router();

/**
 * Gets &#x60;Grant&#x60; objects.
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

  Grants.getGrants(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects by a set of keywords
 * 
 */
router.get('/keys', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Project&#x60; objects by a particular keyword
 * 
 */
router.get('/keys/:keyword', (req, res, next) => {
  const options = {
    keyword: req.params.keyword
  };

  Grants.getGrantsByKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects created on or later than given date
 * 
 */
router.get('/created_date', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByCreatedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects created on or later than given date
 * 
 */
router.get('/created_date/:created_date', (req, res, next) => {
  const options = {
    created_date: req.params.created_date
  };

  Grants.getGrantsByCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects modified on or later than given 
 * date
 * 
 */
router.get('/modified_date', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByModifiedDateForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects created on or later than given date
 * 
 */
router.get('/modified_date/:modified_date', (req, res, next) => {
  const options = {
    modified_date: req.params.modified_date
  };

  Grants.getGrantsByModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 * 
 */
router.get('/amount', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on type
 * 
 */
router.get('/type', (req, res, next) => {
  const options = {
  };

  Grants.getGrantsByTypeForm(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on type
 * 
 */
router.get('/type/:type', (req, res, next) => {
  const options = {
    type: req.params.type
  };

  Grants.getGrantsByType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 * 
 */
router.get('/amount/min/:amount', (req, res, next) => {
  const options = {
    amount: req.params.amount
  };

  Grants.getGrantsByMinAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 * 
 */
router.get('/amount/max/:amount', (req, res, next) => {
  const options = {
    amount: req.params.amount
  };

  Grants.getGrantsByMaxAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60; objects based on amount
 * 
 */
router.get('/amount/min/:min/max/{max}', (req, res, next) => {
  const options = {
    min: req.params.min,
    max: req.params.max
  };

  Grants.getGrantsByAmountRange(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
