import express from 'express';
import Grant from '../services/Grant';

const router = express.Router();

/**
 * Retrieves &#x60;Grant&#x60; objects by **id**.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; amount
 * 
 */
router.get('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves if &#x60;Grant&#x60; amount is equal to param
 * 
 */
router.get('/:id/amount/{amount}', (req, res, next) => {
  const options = {
    id: req.params.id,
    amount: req.params.amount
  };

  Grant.isGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; object created date
 * 
 */
router.get('/:id/created', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantCreatedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; description
 * 
 */
router.get('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; keywords
 * 
 */
router.get('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves if &#x60;Grant&#x60; amount is equal to param
 * 
 */
router.get('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Grant.isGrantHaveKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; objects modified date
 * 
 */
router.get('/:id/modified', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantModifiedDate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; amount
 * 
 */
router.get('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves if &#x60;Grant&#x60; amount is equal to param
 * 
 */
router.get('/:id/type/{type}', (req, res, next) => {
  const options = {
    id: req.params.id,
    type: req.params.type
  };

  Grant.isGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Grant&#x60; url
 * 
 */
router.get('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.getGrantUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
