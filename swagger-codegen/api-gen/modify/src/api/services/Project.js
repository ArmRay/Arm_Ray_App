/**
 * @param {Object} options
 * @param {String} options.project_name Project&#x27;s name
 * @param {String} options.project_main_grant_type Project&#x27;s &#x60;Grant&#x60;type
 * @param {String} options.project_description Description of project
 * @param {Array} options.project_creator_id array of &#x60;Project&#x60;creator ids
 * @param {Array} options.project_collaborators_id array of &#x60;Project&#x60;collaborator ids
 * @param {Array} options.project_keywords array of &#x60;Project&#x60;keywords
 * @param {Array} options.project_urls array of &#x60;Project&#x60;URLs
 * @param {Array} options.grant_ids The &#x60;Grant&#x60; IDs
 * @param {String} options.university_id ID of &#x60;University&#x60;hosting research
 * @param {String} options.grant_facilitator Name of individual fascilitating &#x60;Grant&#x60;funding
 * @param {Array} options.project_file files for grant
 * @param {Array} options.reviews reviews
 * @param {Array} options.posts posts related to project
 * @param {Boolean} options.is_project_private is &#x60;Project&#x60;private?
 * @param {Function} callback
 */
export function createProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id the &#x60;id&#x60; of the &#x60;Project&#x60; to delete
 * @param {Function} callback
 */
export function deleteProjectById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Project&#x60;id
 * @param {String} options.project_name Project&#x27;s name
 * @param {String} options.project_main_grant_type Project&#x27;s &#x60;Grant&#x60;type
 * @param {String} options.project_description Description of project
 * @param {Array} options.project_creator_id array of &#x60;Project&#x60;creator ids
 * @param {Array} options.project_collaborators_id array of &#x60;Project&#x60;collaborator ids
 * @param {Array} options.project_keywords array of &#x60;Project&#x60;keywords
 * @param {Array} options.project_urls array of &#x60;Project&#x60;URLs
 * @param {Array} options.grant_id The &#x60;Grant&#x60; IDs
 * @param {String} options.university_id ID of &#x60;University&#x60;hosting research
 * @param {String} options.grant_facilitator Name of individual fascilitating &#x60;Grant&#x60;funding
 * @param {Array} options.project_file files for grant
 * @param {Array} options.reviews reviews
 * @param {Array} options.posts posts related to project
 * @param {Boolean} options.is_project_private is &#x60;Project&#x60;private?
 * @param {Function} callback
 */
export function updateProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectCollaborators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.collaborators The &#x60;ids&#x60; of the ollaborators
 * @param {Function} callback
 */
export function setAllProjectCollaborators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.collaborators The &#x60;ids&#x60; of the collaborators
 * @param {Function} callback
 */
export function addProjectCollaborators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the collaborator
 * @param {Function} callback
 */
export function deleteProjectCollaborator (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;id&#x60; of the collaborator
 * @param {Function} callback
 */
export function setProjectCollaborators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the collaborator
 * @param {Function} callback
 */
export function addProjectCollaborator (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectCreators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.creators The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function setAllProjectCreators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.creators The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function addProjectCreators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function deleteProjectCreator (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;id&#x60; of the creator
 * @param {Function} callback
 */
export function setProjectCreator (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.user_id The &#x60;ids&#x60; of the creators
 * @param {Function} callback
 */
export function addProjectCreator (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectDescription (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_description The project_description
 * @param {Function} callback
 */
export function setProjectDescription (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_description The project_description
 * @param {Function} callback
 */
export function modifyProjectDescription (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectFiles (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.files The &#x60;files&#x60; of the project
 * @param {Function} callback
 */
export function setAllProjectFiles (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.urls The &#x60;files&#x60; of the &#x60;Project&#x60;&#x60;
 * @param {Function} callback
 */
export function addProjectFiles (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectGrant (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.grant_id The grant_id
 * @param {Function} callback
 */
export function setProjectGrant (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.grant_id The grant_id
 * @param {Function} callback
 */
export function modifyProjectGrant (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.keywords The &#x60;keywords&#x60; of the &#x60;Project&#x60;&#x60;
 * @param {Function} callback
 */
export function setAllProjectKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.keywords The &#x60;ids&#x60; of the collaborators
 * @param {Function} callback
 */
export function addProjectKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function deleteProjectKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.keyword The &#x60;keyword&#x60;
 * @param {Function} callback
 */
export function setProjectKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function addProjectKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_name The project_name
 * @param {Function} callback
 */
export function addProjectName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_name The project_name
 * @param {Function} callback
 */
export function modifyProjectName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectPosts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.posts The &#x60;ids&#x60; of the posts
 * @param {Function} callback
 */
export function setAllProjectPosts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.reviews The &#x60;ids&#x60; of the posts
 * @param {Function} callback
 */
export function addProjectPosts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.post_id The &#x60;ids&#x60; of the post
 * @param {Function} callback
 */
export function deleteProjectPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.post_id The &#x60;id&#x60; of the post
 * @param {Function} callback
 */
export function addProjectPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Boolean} options.is_private is &#x60;Project&#x60;private?
 * @param {Function} callback
 */
export function setIsProjectPrivate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserProjectName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectReviews (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.reviews The &#x60;ids&#x60; of the reviews
 * @param {Function} callback
 */
export function setAllProjectReviews (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.reviews The &#x60;ids&#x60; of the reviews
 * @param {Function} callback
 */
export function addProjectReviews (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.review_id The &#x60;ids&#x60; of the review
 * @param {Function} callback
 */
export function deleteProjectReview (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.review_id The &#x60;id&#x60; of the review
 * @param {Function} callback
 */
export function addProjectReview (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjecUniversities (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.university_id The university_id
 * @param {Function} callback
 */
export function setProjectUniversity (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.university_id The university_id
 * @param {Function} callback
 */
export function modifyProjectUniversity (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteProjectUrls (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.urls The &#x60;urls&#x60; of the project
 * @param {Function} callback
 */
export function setAllProjectUrls (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Array} options.urls The &#x60;urls&#x60; of the &#x60;Project&#x60;&#x60;
 * @param {Function} callback
 */
export function addProjectUrls (options, callback) {
  // Implement you business logic here...
}

