/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.userskill_id Unique identifier representing a specific &#x60;UserSkill&#x60;
 * @param {String} options.user_id Unique identifier representing a specific &#x60;User&#x60; that owns a skill
 * @param {String} options.skill_id Unique identifier representing a specific &#x60;Skill&#x60; that a &#x60;UserSkill&#x60; represents
 * @param {String} options.created_date datetime stamp of &#x60;Skill&#x60; creation
 * @param {String} options.updated_date datetime stamp of &#x60;Skill&#x60; update
 * @param {Array} options.endorsement_ids id of &#x60;User&#x60; endorser
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



 
export function getUserSkills (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getUserSkillsByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getUserSkillsByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of modification
 * @param {Function} callback
 */
export function getUserSkillsByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of creation
 * @param {Function} callback
 */
export function getUserSkillsByModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.user_id Id of &#x60;User&#x60; to get &#x60;UserSkill&#x60; objects for
 * @param {Function} callback
 */
export function getUserSkillByUser (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.skill_id id of &#x60;Skill&#x60;
 * @param {Function} callback
 */
export function getUserSkillsbySkillId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.skill_ids id of &#x60;Skill&#x60; objects
 * @param {Function} callback
 */
export function getUserSkillsbySkillIds (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.user_id id of &#x60;User&#x60;
 * @param {Function} callback
 */
export function getUserSkillsbyEndorsementId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.user_id ids of &#x60;User&#x60; objects
 * @param {Function} callback
 */
export function getUserSkillsbyEndorsementIds (options, callback) {
  // Implement you business logic here...
}

