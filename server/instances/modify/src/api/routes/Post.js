import express from 'express';
import Post from '../services/Post';

const router = express.Router();

/**
 * Creates &#x60;Post&#x60; objects.  **post_tags_id** and 
 * **post_keywords** optional, all others required.
 * 
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  Post.createPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes &#x60;Post&#x60; objects by **id**.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.deletePostById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates &#x60;Post&#x60; objects. **id** is required,
 * 
 * all others optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePosttById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes text of a &#x60;Post&#x60; author by **id**.
 * 
 */
router.delete('/:id/author', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.deletePostAuthorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;author.  **id** and **author** both required.
 * 
 */
router.post('/:id/author', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostAuthorByIdPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;author.  **id** and **author** both required.
 * 
 */
router.put('/:id/author', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostAuthorById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes all tags on a &#x60;Post&#x60; objects by **id**.
 * 
 */
router.delete('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.deletePostKeywordsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Replaces keywords on &#x60;Post&#x60; objects. **id** and **keywords* 
 * both required.
 * 
 */
router.post('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.replacePostKeywordsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds keywords to &#x60;Post&#x60; objects. **id** and **keywords** 
 * both required.
 * 
 */
router.put('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updateProjectKeywordsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes a keyword on a &#x60;Post&#x60; objects by **id** and 
 * **keyword**
 * 
 */
router.delete('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Post.deletePostKeywordById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds keyword to &#x60;Post&#x60; objects. **id** and **user_id* both 
 * required.
 * 
 */
router.post('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Post.addPostKeywordByIdPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds tags to &#x60;Post&#x60; objects. **id** and **keyword** both 
 * required.
 * 
 */
router.put('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Post.addPostKeywordById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;privacy.  **id** and **is_private** both 
 * required.
 * 
 */
router.post('/:id/private', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostPrivacyByIdPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;privacy.  **id** and **is_private** both 
 * required.
 * 
 */
router.put('/:id/private', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostPrivacyById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes all tags on a &#x60;Post&#x60; objects by **id**.
 * 
 */
router.delete('/:id/tags', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.deleteProjectTagsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Replaces tags on &#x60;Post&#x60; objects. **id** and **tagged_users* 
 * both required.
 * 
 */
router.post('/:id/tags', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.replacePostTagsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes the tags on a &#x60;Post&#x60; objects by **id** and 
 * **user_id**
 * 
 */
router.delete('/:id/tags/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Post.deletePostTagsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds tag to &#x60;Post&#x60; objects. **id** and **user_id** both 
 * required.
 * 
 */
router.post('/:id/tags/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Post.addPostTagsByIdPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Adds tags to &#x60;Post&#x60; objects. **id** and **user_id** both 
 * required.
 * 
 */
router.put('/:id/tags/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Post.updatePostTagsById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes text of a &#x60;Post&#x60; objects by **id**.
 * 
 */
router.delete('/:id/text', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.deletePostTextById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;text.  **id** and **text** both required.
 * 
 */
router.post('/:id/text', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostTextByIdPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;title.  **id** and **text** both required.
 * 
 */
router.put('/:id/text', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostTextById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Deletes title of a &#x60;Post&#x60; objects by **id**.
 * 
 */
router.delete('/:id/title', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Post.deletePosTitleById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;title.  **id** and **title** both required.
 * 
 */
router.post('/:id/title', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostTitleByIdPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Sets the &#x60;Post&#x60;title.  **id** and **title** both required.
 * 
 */
router.put('/:id/title', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Post.updatePostTitleById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
