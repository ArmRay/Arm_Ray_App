/**
 * @param {Object} options
 * @param {String} options.id the &#x60;id&#x60; of the &#x60;Project&#x60; to delete
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

 
export function getProjectById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectCollaborators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.user_id The &#x60;User&#x60;id
 * @param {Function} callback
 */
export function isUserCollaboratorOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectCreators (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.user_id The &#x60;User&#x60;id
 * @param {Function} callback
 */
export function isUserCreatorOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getProjectDescriptionById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_description The &#x60;project_description&#x60; of the &#x60;Project&#x60;
 * @param {Function} callback
 */
export function isProjectDescriptionOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectFiles (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getProjectGrantById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.grant_id The &#x60;grant_id&#x60; of the &#x60;Project&#x60;
 * @param {Function} callback
 */
export function isGrantOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;User&#x60; to retrieve
 * @param {String} options.keyword The keyword
 * @param {Function} callback
 */
export function isKeywordOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.project_name The &#x60;project_name&#x60; of the &#x60;Project&#x60;
 * @param {Function} callback
 */
export function isNameOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectPosts (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.post_id The &#x60;id&#x60; of the post
 * @param {Function} callback
 */
export function isPostOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function isProjectPrivate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getProjectNameById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectReviews (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.review_id The &#x60;id&#x60; of the review
 * @param {Function} callback
 */
export function isReviewOnOProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getUniversitiesById (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {String} options.university_id The id of the &#x60;University&#x60;
 * @param {Function} callback
 */
export function isUniversityOnProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.id The &#x60;id&#x60; of the &#x60;Project&#x60; to retrieve
 * @param {Function} callback
 */
export function getAllProjectUrls (options, callback) {
  // Implement you business logic here...
}

