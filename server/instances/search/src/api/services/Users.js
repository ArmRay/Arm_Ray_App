/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.first_name first name of user
 * @param {String} options.last_name last name of user
 * @param {Boolean} options.is_collaborator is &#x60;User&#x60;a collaborator?
 * @param {Boolean} options.is_creator is &#x60;User&#x60;a creator?
 * @param {String} options.city city location of user
 * @param {String} options.state state location of user
 * @param {Array} options.university_ids universities a &#x60;User&#x60;is associated with
 * @param {String} options.project_id project_id the &#x60;User&#x60;is associated with
 * @param {String} options.created_date date the &#x60;User&#x60;was created
 * @param {String} options.modified_date date the &#x60;User&#x60;was modified
 * @param {Array} options.keywords keyword
 * @param {Array} options.skills skills to search for
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



 
export function getUsers (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.university_id ID of &#x27;User&#x27; to fetch
 * @param {Number} options.max max num of &#x27;User&#x27; to fetch
 * @param {Number} options.page page in pagination
 * @param {Function} callback
 */
export function getUsersByUniversityId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.project_id ID of &#x27;Project&#x27; to fetch
 * @param {Number} options.max max num of &#x27;User&#x27; to fetch
 * @param {Number} options.page page in pagination
 * @param {Function} callback
 */
export function getUsersByProjectId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date Date that &#x60;User&#x60; object was created
 * @param {Function} callback
 */
export function getUsersByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date Date that &#x60;User&#x60; object was created
 * @param {Function} callback
 */
export function getUsersByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date Date that &#x60;User&#x60; object was modified
 * @param {Function} callback
 */
export function getUsersByModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date Date that &#x60;User&#x60; object was modified
 * @param {Function} callback
 */
export function getUsersByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.keywords Keywords when searching for user
 * @param {Function} callback
 */
export function getUsersByKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.skills Skills when searching for user
 * @param {Function} callback
 */
export function getUsersBySkills (options, callback) {
  // Implement you business logic here...
}

