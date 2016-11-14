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




 
export function getReviewById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewBodyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewCreatedDateById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewRatingById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.rating The &#x60;Review&#x60; rating
 * @param {Function} callback
 */
export function isReviewRating (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewReviewerById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {String} options.user_id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function isUserReviewReviewer (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewUpdatedDateById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Review&#x60; id
 * @param {Function} callback
 */
export function getReviewUrlById (options, callback) {
  // Implement you business logic here...
}

