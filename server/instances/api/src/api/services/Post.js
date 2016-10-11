/**
 * @param {Object} options
 * @param {String} options.post_title ID of &#x60;User&#x60; author of post
 * @param {String} options.post_text ID of &#x60;User&#x60; author of &#x60;Post&#x60;
 * @param {String} options.post_creator_id ID of &#x60;User&#x60; author of post
 * @param {Array} options.post_tags_id array of &#x60;User&#x60;s tagged in &#x60;Post&#x60;
 * @param {Array} options.post_keywords array of keywords for &#x60;Post&#x60;
 * @param {Boolean} options.is_post_private is &#x60;Post&#x60; private?
 * @param {Function} callback
 */
export function createPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function getPostById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.post_title The &#x60;Post&#x60; name
 * @param {String} options.post_text The &#x60;Post&#x60; body
 * @param {String} options.post_creator_id ID of &#x60;User&#x60; author of post
 * @param {Array} options.post_tags_id array of &#x60;User&#x60;s tagged in &#x60;Post&#x60;
 * @param {Array} options.post_keywords array of keywords for &#x60;Post&#x60;
 * @param {Boolean} options.is_post_private Is &#x60;Post&#x60;private?
 * @param {Function} callback
 */
export function updatePosttById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function deletePostById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function getPostTagsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.tagged_users new tags
 * @param {Function} callback
 */
export function replacePostTagsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function deleteProjectTagsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.user_id user_id to check for
 * @param {Function} callback
 */
export function getIsUserTagOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.user_id new tags
 * @param {Function} callback
 */
export function updatePostTagsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.user_id The &#x60;User&#x60; id
 * @param {Function} callback
 */
export function addPostTagsByIdPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.user_id The &#x60;User&#x60; id
 * @param {Function} callback
 */
export function deletePostTagsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function getPostKeywordsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.keywords new keywords
 * @param {Function} callback
 */
export function updateProjectKeywordsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Array} options.keywords new tags
 * @param {Function} callback
 */
export function replacePostKeywordsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {Function} callback
 */
export function deletePostKeywordsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.keyword the keyword
 * @param {Function} callback
 */
export function isKeywordOnPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x27;s name
 * @param {String} options.keyword the keyword
 * @param {Function} callback
 */
export function addPostKeywordById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.keyword The &#x60;User&#x60; id
 * @param {Function} callback
 */
export function addPostKeywordByIdPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function deletePostKeywordById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function getPostTitleById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.title new title
 * @param {Function} callback
 */
export function updatePostTitleById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.title new title
 * @param {Function} callback
 */
export function updatePostTitleByIdPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function deletePosTitleById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function getPostTextById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.text new text
 * @param {Function} callback
 */
export function updatePostTextById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.text new title
 * @param {Function} callback
 */
export function updatePostTextByIdPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function deletePostTextById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function getPostAuthorById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.author new author
 * @param {Function} callback
 */
export function updatePostAuthorById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.text new author
 * @param {Function} callback
 */
export function updatePostAuthorByIdPost (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function deletePostAuthorById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function isPostPrivateById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Boolean} options.is_private is &#x60;Post&#x60;private?
 * @param {Function} callback
 */
export function updatePostPrivacyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Boolean} options.is_private is &#x60;Post&#x60;private?
 * @param {Function} callback
 */
export function updatePostPrivacyByIdPost (options, callback) {
  // Implement you business logic here...
}

