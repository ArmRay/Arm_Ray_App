import express from 'express';
import Grant from '../services/Grant';

const router = express.Router();

/**
 * Creates &#x60;Grant&#x60; objects. All fields required.
 * 
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  Grant.createGrant(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Grant&#x60; objects by **id**.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.deleteGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Grant&#x60; objects. **id** is required,
 * 
 * all others optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.updateGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; amount
 * 
 */
router.delete('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.clearGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; amount
 * 
 */
router.post('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.setGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 * 
 */
router.put('/:id/amount', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.modifyGrantAmount(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; amount
 * 
 */
router.post('/:id/amount/{amount}', (req, res, next) => {
  const options = {
    id: req.params.id,
    amount: req.params.amount
  };

  Grant.setGrantAmountPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 * 
 */
router.put('/:id/amount/{amount}', (req, res, next) => {
  const options = {
    id: req.params.id,
    amount: req.params.amount
  };

  Grant.modifyGrantAmountPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; description
 * 
 */
router.delete('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.clearGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; description
 * 
 */
router.post('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.setGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; description
 * 
 */
router.put('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.modifyGrantDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; keywords
 * 
 */
router.delete('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.clearGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; keywords
 * 
 */
router.post('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.setGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; keywords
 * 
 */
router.put('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.addGrantKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; keyword
 * 
 */
router.delete('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Grant.deleteGrantKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; keyword
 * 
 */
router.post('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Grant.setGrantKeywordPath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Grant&#x60; keyword
 * 
 */
router.put('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Grant.addGrantKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; type
 * 
 */
router.delete('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.clearGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; amount
 * 
 */
router.post('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.setGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 * 
 */
router.put('/:id/type', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.modifyGrantType(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set &#x60;Grant&#x60; type
 * 
 */
router.post('/:id/type/{type}', (req, res, next) => {
  const options = {
    id: req.params.id,
    type: req.params.type
  };

  Grant.setGrantTypePath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60; amount
 * 
 */
router.put('/:id/type/{type}', (req, res, next) => {
  const options = {
    id: req.params.id,
    type: req.params.type
  };

  Grant.modifyGrantTypePath(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Clear &#x60;Grant&#x60; url array
 * 
 */
router.delete('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Grant.clearGrantUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Replace &#x60;Grant&#x60; url array
 * 
 */
router.post('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.setGrantUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Grant&#x60; url
 * 
 */
router.put('/:id/url', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Grant.addGrantUrl(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
