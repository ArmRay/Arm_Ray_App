/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {Function} callback
 */
import models from '../../../../../model';
import bcrypt from 'bcrypt';

const Grant = models.grant;
const Post = models.post;
const Project = models.project;
const Review = models.review;
const Skill = models.skill;
const University = models.University;
const User = models.User;
const UserSkill = models.userkSkill;



 
export function deleteReviewById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.review_body body of &#x60;Review&#x60;
 * @param {String} options.reviewer_id The &#x60;User&#x60;who wrote &#x60;Review&#x60;
 * @param {Number} options.rating Rating (1 &lt;&#x3D; rating &lt;&#x3D; 5)
 * @param {Function} callback
 */
export function updateReviewById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {Function} callback
 */
export function deleteReviewBodyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.body 
 * @param {Function} callback
 */
export function setReviewBodyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.body 
 * @param {Function} callback
 */
export function updateReviewBodyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function deleteReviewRating (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.rating The &#x60;Review&#x60; rating
 * @param {Function} callback
 */
export function setReviewRating (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.rating The &#x60;Review&#x60; rating
 * @param {Function} callback
 */
export function updateReviewRating (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function deleteReviewReviewer (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.user_id The &#x60;Review&#x60; reviewer id
 * @param {Function} callback
 */
export function deleteReviewReviewerById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.user_id 
 * @param {Function} callback
 */
export function setReviewReviewerById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; name
 * @param {String} options.user_id 
 * @param {Function} callback
 */
export function updateReviewReviewerById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function deleteReviewUrl (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.url The &#x60;Review&#x60; url
 * @param {Function} callback
 */
export function setReviewUrl (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.url The &#x60;Review&#x60; url
 * @param {Function} callback
 */
export function updateReviewUrl (options, callback) {
  // Implement you business logic here...
}

