/**
 * @param {Object} options
 * @param {String} options.id The &#x60;Skill&#x60; id
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



 
export function getSkillById (options, callback) {
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
export function getSkillBodyById (options, callback) {
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
 * @param {String} options.id The &#x60;Skill&#x60; id
 * @param {Function} callback
 */
export function getSkillUpdatedDateById (options, callback) {
  // Implement you business logic here...
}

