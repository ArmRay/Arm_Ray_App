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
 * Note that despite the name, this only creates one skill.
 * @param {Object} options
 * @param {String} options.description description of &#x60;Skill&#x60;
 * @param {Function} callback
 */
export function createSkills (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Post&#x60; name
 * @param {String} options.description description of &#x60;Skill&#x60;
 * @param {Function} callback
 */
export function updateSkillById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function deleteSkillwById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillBodyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {String} options.description
 * @param {Function} callback
 */
export function updateSkillDescriptionByIdForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {String} options.description The &#x60;Skill&#x60; description
 * @param {Function} callback
 */
export function setSkillDescriptionByIdForn (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {Function} callback
 */
export function deleteSkillDescriptionByIdForn (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {String} options.description The &#x60;Skill&#x60; description
 * @param {Function} callback
 */
export function getIsSkillBodyById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; name
 * @param {String} options.description
 * @param {Function} callback
 */
export function updateSkillDescriptionById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {String} options.description The &#x60;Skill&#x60; description
 * @param {Function} callback
 */
export function setSkillDescriptionById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillCreatedDateById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillUpdatedDateById (options, callback) {
  // Implement you business logic here...
}
