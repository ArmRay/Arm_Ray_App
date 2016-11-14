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

/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.post_id Unique identifier representing a specific &#x60;Post&#x60;
 * @param {String} options.created_date datetime stamp of &#x60;Post&#x60; creation
 * @param {String} options.updated_date datetime stamp of &#x60;Post&#x60; update
 * @param {Array} options.post_tags_id array of &#x60;User&#x60;s tagged in &#x60;Post&#x60;
 * @param {Array} options.post_keywords array of keywords for &#x60;Post&#x60;
 * @param {String} options.post_title ID of &#x60;User&#x60; author of post
 * @param {String} options.post_text ID of &#x60;User&#x60; author of &#x60;Post&#x60;
 * @param {String} options.post_creator_id ID of &#x60;User&#x60; author of &#x60;Post&#x60;
 * @param {Boolean} options.is_post_private is &#x60;Post&#x60; private?
 * @param {Function} callback
 */
export function getPosts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.user_id ID of &#x27;User&#x27; to fetch
 * @param {Function} callback
 */
export function getPostsByAuthorId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.keywords Keywords when searching for user
 * @param {Function} callback
 */
export function getPostsByKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.keyword keyword to search for
 * @param {Function} callback
 */
export function getPostsByKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getPostsByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getPostsByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of modification
 * @param {Function} callback
 */
export function getPostsByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of creation
 * @param {Function} callback
 */
export function getPostsByModifiedDate (options, callback) {
  // Implement you business logic here...
}
