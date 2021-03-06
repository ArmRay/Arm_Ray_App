/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
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


 
export function getPostById (options, callback) {
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
 * @param {Function} callback
 */
export function getPostKeywordsById (options, callback) {
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
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function isPostPrivateById (options, callback) {
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
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {String} options.user_id user_id to check for
 * @param {Function} callback
 */
export function getIsUserTagOnProject (options, callback) {
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
 * @param {String} options.id The &#x60;Post&#x60; id
 * @param {Function} callback
 */
export function getPostTitleById (options, callback) {
  // Implement you business logic here...
}

