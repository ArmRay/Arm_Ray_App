import express from 'express';
import Project from '../services/Project';

const router = express.Router();

/**
 * Creates &#x60;Project&#x60; objects. **project_name**, 
 * **project_description**,
 * 
 * **project_creator_id**, and **is_project_private** are 
 * required,
 * 
 * all others optional.
 * 
 */
router.post('/', (req, res, next) => {
  const options = {
  };

  Project.createProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete a &#x27;Project&#x27; by their id.
 * 
 */
router.delete('/:id', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectById(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Updates a &#x60;Project&#x60; object. All fields other than &#x60;id&#x60; 
 * optional.
 * 
 */
router.put('/:id', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.updateProject(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;project_collaborators&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/collaborators', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectCollaborators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set creators of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/collaborators', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectCollaborators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to collaborators of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/collaborators', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectCollaborators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;project_collaborator&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/collaborators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.deleteProjectCollaborator(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set collaborators of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/collaborators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.setProjectCollaborators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to collaborator of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/collaborators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.addProjectCollaborator(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;project_creators&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/creators', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectCreators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set creators of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/creators', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectCreators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to creators of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/creators', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectCreators(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;project_creator&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/creators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.deleteProjectCreator(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set creator of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/creators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.setProjectCreator(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to creators of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/creators/{user_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    user_id: req.params.user_id
  };

  Project.addProjectCreator(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete project_description from a project
 * 
 */
router.delete('/:id/description', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add project_description to a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/description/{project_description}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_description: req.params.project_description
  };

  Project.setProjectDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify project_description of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/description/{project_description}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_description: req.params.project_description
  };

  Project.modifyProjectDescription(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;files&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/files', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectFiles(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set files of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/files', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectFiles(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to files of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/files', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectFiles(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete &#x60;Grant&#x60;from a project
 * 
 */
router.delete('/:id/grant', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectGrant(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Grant&#x60;to a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/grant/{grant_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    grant_id: req.params.grant_id
  };

  Project.setProjectGrant(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify &#x60;Grant&#x60;of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/grant/{grant_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    grant_id: req.params.grant_id
  };

  Project.modifyProjectGrant(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;keywords&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set keywords of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to keywords of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/keys', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectKeywords(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;keyword&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Project.deleteProjectKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set keyword of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Project.setProjectKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to keyword of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/keys/{keyword}', (req, res, next) => {
  const options = {
    id: req.params.id,
    keyword: req.params.keyword
  };

  Project.addProjectKeyword(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add project_name to a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/name/{project_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_name: req.params.project_name
  };

  Project.addProjectName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify project_name of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/name/{project_name}', (req, res, next) => {
  const options = {
    id: req.params.id,
    project_name: req.params.project_name
  };

  Project.modifyProjectName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;posts&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/posts', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectPosts(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set posts of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/posts', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectPosts(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to posts of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/posts', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectPosts(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;post&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/posts/{post_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    post_id: req.params.post_id
  };

  Project.deleteProjectPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Post&#x60;to a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/posts/{post_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    post_id: req.params.post_id
  };

  Project.addProjectPost(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set is_private from a  &#x60;Project&#x60;.
 * 
 */
router.put('/:id/private', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setIsProjectPrivate(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete project_name from a project
 * 
 */
router.delete('/:id/project_name', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteUserProjectName(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;reviews&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/reviews', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectReviews(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set reviews of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/reviews', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectReviews(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to reviews of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/reviews', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectReviews(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove a &#x27;review&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/reviews/{review_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    review_id: req.params.review_id
  };

  Project.deleteProjectReview(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add &#x60;Review&#x60;to a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/reviews/{review_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    review_id: req.params.review_id
  };

  Project.addProjectReview(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Delete all universities from a project
 * 
 */
router.delete('/:id/uni', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjecUniversities(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set university_id to a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/uni/{university_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    university_id: req.params.university_id
  };

  Project.setProjectUniversity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Modify university_id of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/uni/{university_id}', (req, res, next) => {
  const options = {
    id: req.params.id,
    university_id: req.params.university_id
  };

  Project.modifyProjectUniversity(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Remove all &#x27;urls&#x27; from a &#x60;Project&#x60;.
 * 
 */
router.delete('/:id/urls', (req, res, next) => {
  const options = {
    id: req.params.id
  };

  Project.deleteProjectUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Set urls of a &#x60;Project&#x60;.
 * 
 */
router.post('/:id/urls', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.setAllProjectUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

/**
 * Add to urls of a &#x60;Project&#x60;.
 * 
 */
router.put('/:id/urls', (req, res, next) => {
  const options = {
    id: req.params.id,
  };

  Project.addProjectUrls(options, (err, data) => {
    if (err) {
      const err_response = { status: 500, message: 'Unexpected error' };
      return res.status(500).send(err_response);
    }

    res.status(200).send(data);
  });
});

module.exports = router;
