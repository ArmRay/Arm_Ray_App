/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.review_id Unique identifier representing a specific &#x60;Review&#x60;
 * @param {String} options.created_date datetime stamp of &#x60;Review&#x60; creation
 * @param {String} options.updated_date datetime stamp of &#x60;Review&#x60; update
 * @param {String} options.reviewer_id id of &#x60;User&#x60; reviewer
 * @param {String} options.review_body body of &#x60;Review&#x60;
 * @param {Number} options.rating Integer rating of &#x60;Review&#x60;(1-5)
 * @param {Function} callback
 */
export function getReviewss (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getReviewsByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getReviewsByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of modification
 * @param {Function} callback
 */
export function getReviewssByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of creation
 * @param {Function} callback
 */
export function getReviewsByModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.user_id id of &#x60;User&#x60; reviewer
 * @param {Function} callback
 */
export function getReviewsByReviewer (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.min Minimum rating (&gt;&#x3D; 1)
 * @param {Number} options.max Maximum rating (&lt;&#x3D; 5)
 * @param {Function} callback
 */
export function getReviewsByRating (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.rating Minimum rating (1 &lt;&#x3D; rating &lt;&#x3D; 5)
 * @param {Function} callback
 */
export function getReviewsByMinRating (options, callback) {
  // Implement you business logic here...
}

