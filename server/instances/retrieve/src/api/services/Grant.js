/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
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



 
export function getGrantById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.amount The &#x60;Grant&#x60; amount
 * @param {Function} callback
 */
export function isGrantAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantDescription (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; keywords
 * @param {Function} callback
 */
export function getGrantKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.keyword The &#x60;Grant&#x60; keyword
 * @param {Function} callback
 */
export function isGrantHaveKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; id
 * @param {Function} callback
 */
export function getGrantType (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {String} options.type The &#x60;Grant&#x60; type
 * @param {Function} callback
 */
export function isGrantType (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Grant&#x60; name
 * @param {Function} callback
 */
export function getGrantUrl (options, callback) {
  // Implement you business logic here...
}

