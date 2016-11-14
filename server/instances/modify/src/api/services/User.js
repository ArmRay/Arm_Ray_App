/**
 * @param {Object} options
 * @param {String} options.first_name first name of &#x60;User&#x60;
 * @param {String} options.last_name last name of &#x60;User&#x60;
 * @param {Boolean} options.is_collaborator is &#x60;User&#x60; a collaborator?
 * @param {Boolean} options.is_creator is &#x60;User&#x60; a creator?
 * @param {String} options.city city location of &#x60;User&#x60;
 * @param {String} options.state state location of &#x60;User&#x60;
 * @param {Array} options.university_ids The &#x60;University&#x60;a &#x60;User&#x60; is associated with
 * @param {String} options.project_id project_id the &#x60;User&#x60; is associated with
 * @param {Array} options.keywords keyword
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




 
export function createUser (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id the &#x60;id&#x60; of the &#x60;User&#x60; to delete
 * @param {Function} callback
 */
export function deleteUserById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id ID of &#x60;User&#x60; to fetch
 * @param {String} options.first_name first name of &#x60;User&#x60;
 * @param {String} options.last_name last name of &#x60;User&#x60;
 * @param {Boolean} options.is_collaborator is &#x60;User&#x60; a collaborator?
 * @param {Boolean} options.is_creator is &#x60;User&#x60; a creator?
 * @param {String} options.city city location of &#x60;User&#x60;
 * @param {String} options.state state location of &#x60;User&#x60;
 * @param {String} options.university The &#x60;University&#x60;a &#x60;User&#x60; is associated with
 * @param {String} options.project_id project_id the &#x60;User&#x60; is associated with
 * @param {Array} options.keywords keyword
 * @param {Function} callback
 */
export function updateUser (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserCity (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.city The city
 * @param {Function} callback
 */
export function addUserCity (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.city The city
 * @param {Function} callback
 */
export function modifyUserCity (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Boolean} options.isCollaborator Is &#x60;User&#x60;a collaborator?
 * @param {Function} callback
 */
export function setIsUserCollaboratorById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Boolean} options.isCollaborator Is &#x60;User&#x60;a collaborator?
 * @param {Function} callback
 */
export function setIsUserCollaboratorByIdPut (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Boolean} options.isCreator Is &#x60;User&#x60;a creator?
 * @param {Function} callback
 */
export function setIsUserCreatorById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Boolean} options.isCollaborator Is &#x60;User&#x60;a creator?
 * @param {Function} callback
 */
export function setIsUserCreatorByIdPut (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserFirstName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.first_name The keywords
 * @param {Function} callback
 */
export function addUserFirstName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.first_name The keywords
 * @param {Function} callback
 */
export function modifyUserFirstName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Array} options.images The paths of the images
 * @param {Function} callback
 */
export function deleteImagesFromUserById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Array} options.images The paths of the images
 * @param {Function} callback
 */
export function setUserImages (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteKeywordsFromUserById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Array} options.keywords The keywords
 * @param {Function} callback
 */
export function setUserKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function deleteKeywordFromUserById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function setUserKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserLastName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.last_name The keywords
 * @param {Function} callback
 */
export function addUserLastName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.last_name The keywords
 * @param {Function} callback
 */
export function modifyUserLastName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteAllUserProjectById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.project_id The &#x60;project_id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserProjectById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.project_id The &#x60;project_id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function settUserProjectById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteAllUserReviewById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.review_id The &#x60;review_id&#x60; of the &#x60;Review&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserReviewById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.review_id The &#x60;review_id&#x60; of the &#x60;Review&#x60; to retrieve
 * @param {Function} callback
 */
export function setUserReviewById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteSkillsFromUserById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Array} options.keywords The skills ids
 * @param {Function} callback
 */
export function setUserSkills (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Array} options.keywords The skills ids
 * @param {Function} callback
 */
export function addUserSkills (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.skill_id The &#x60;id&#x60; of the &#x60;Skill&#x60; to delete
 * @param {Function} callback
 */
export function deleteSkillFromUserById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.skill_id The skills is
 * @param {Function} callback
 */
export function setUserSkill (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.skill_id The skills id
 * @param {Function} callback
 */
export function addUserSkill (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserState (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.state The state
 * @param {Function} callback
 */
export function addUserState (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.state The state
 * @param {Function} callback
 */
export function modifyUserState (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.university_id The &#x60;university_id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function deleteUserUniversityById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.university_id The &#x60;university_id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function settUserUniversityById (options, callback) {
  // Implement you business logic here...
}

