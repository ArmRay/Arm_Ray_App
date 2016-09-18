import express from 'express';
import Project from '../services/Project';

const router = express.Router();

/**
 * Retrieve a &#x27;Project&#x27; by their id.
 * 
 */
router.get('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get collaborators of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/collaborators', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectCollaborators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;User&#x60; is collaborator on &#x60;Project&#x27;, return if true
 * 
 */
router.get('/:id/collaborators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.isUserCollaboratorOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get creators of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/creators', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectCreators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;User&#x60; is creator on &#x60;Project&#x27;, return &#x60;User&#x60;if 
 * true.
 * 
 */
router.get('/:id/creators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.isUserCreatorOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve project_description associated with a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getProjectDescriptionById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Project&#x60;descript of &#x60;Project&#x60; is some value
 * 
 */
router.get('/:id/description/{project_description}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_description: req.params.project_description
  };

  Project.isProjectDescriptionOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get files of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/files', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectFiles(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve &#x60;Grant&#x60;associated with a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/grant', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getProjectGrantById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Grant&#x60; is on &#x60;Project&#x60;
 * 
 */
router.get('/:id/grant/{grant_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    grant_id: req.params.grant_id
  };

  Project.isGrantOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get keywords of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if keyword is on &#x60;Project&#x27;.
 * 
 */
router.get('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Project.isKeywordOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Project&#x60;name of &#x60;Project&#x60; is some value
 * 
 */
router.get('/:id/name/{project_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_name: req.params.project_name
  };

  Project.isNameOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get posts of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/posts', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectPosts(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Post&#x60; is on a &#x60;Project&#x60;
 * 
 */
router.get('/:id/posts/{post_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    post_id: req.params.post_id
  };

  Project.isPostOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve is_private from a  &#x60;Project&#x60;.
 * 
 */
router.get('/:id/private', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.isProjectPrivate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve project_name associated with a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/project_name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getProjectNameById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get reviews of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/reviews', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectReviews(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Review&#x60; of a &#x60;Project&#x60; if it is on project
 * 
 */
router.get('/:id/reviews/{review_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    review_id: req.params.review_id
  };

  Project.isReviewOnOProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Retrieve universities associated with a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/uni', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getUniversitiesById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Check if &#x60;Project&#x60;descript of &#x60;Project&#x60; is some value
 * 
 */
router.get('/:id/uni/{university_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    university_id: req.params.university_id
  };

  Project.isUniversityOnProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Get urls of a &#x60;Project&#x60;.
 * 
 */
router.get('/:id/urls', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.getAllProjectUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
