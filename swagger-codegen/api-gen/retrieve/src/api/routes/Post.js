import express from 'express';
import Post from '../services/Post';

const router = express.Router();

/**
 * Retrieves &#x60;Post&#x60; objects by **id**.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.getPostById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Post&#x60; author
 * 
 */
router.get('/:id/author', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.getPostAuthorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Post&#x60; keywords
 * 
 */
router.get('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.getPostKeywordsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves whether keyword is on past
 * 
 */
router.get('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Post.isKeywordOnPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves whether &#x60;Post&#x60; is private
 * 
 */
router.get('/:id/private', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.isPostPrivateById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Post&#x60; tags
 * 
 */
router.get('/:id/tags', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.getPostTagsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves whether &#x60;User&#x60;is tagged on past
 * 
 */
router.get('/:id/tags/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Post.getIsUserTagOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Post&#x60; text
 * 
 */
router.get('/:id/text', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.getPostTextById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieves &#x60;Post&#x60; title
 * 
 */
router.get('/:id/title', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.getPostTitleById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
