/**
 * @param {Object} options
 * @param {String} options.id The &#x60;UserSkill&#x60; id
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



 
export function getUniversityById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityCityById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.city The &#x60;University&#x60; city
 * @param {Function} callback
 */
export function isUniversityCityById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityGeolocationById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Number} options.lat The &#x60;University&#x60; latitude
 * @param {Number} options.long The &#x60;University&#x60; longitude
 * @param {Function} callback
 */
export function isUniversityGeolocationById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityimagesById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityNameById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.name The &#x60;University&#x60; name
 * @param {Function} callback
 */
export function isUniversityNameById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityProjectsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.project_id The &#x60;Project&#x60; id
 * @param {Function} callback
 */
export function isUniversityProjectsById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {Function} callback
 */
export function getUniversityStateById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;University&#x60; id
 * @param {String} options.state The &#x60;University&#x60; state
 * @param {Function} callback
 */
export function isUniversityStateById (options, callback) {
  // Implement you business logic here...
}

