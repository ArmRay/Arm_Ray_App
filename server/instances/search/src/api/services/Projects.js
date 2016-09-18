/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.project_id Unique identifier representing a specific project
 * @param {String} options.created_date datetime stamp of &#x60;Project&#x60;creation
 * @param {String} options.updated_date datetime stamp of &#x60;Project&#x60;update
 * @param {String} options.project_name Project&#x27;s name
 * @param {String} options.project_main_grant_type Project&#x27;s &#x60;Grant&#x60;type
 * @param {String} options.project_description Description of project
 * @param {Array} options.project_creator_id array of &#x60;Project&#x60;creator ids
 * @param {Array} options.project_collaborators_id array of &#x60;Project&#x60;collaborator ids
 * @param {Array} options.project_keywords array of &#x60;Project&#x60;keywords
 * @param {Array} options.project_urls array of &#x60;Project&#x60;URLs
 * @param {String} options.grant_id The &#x60;Grant&#x60;ID
 * @param {String} options.university_id ID of &#x60;University&#x60;hosting research
 * @param {String} options.grant_facilitator Name of individual fascilitating &#x60;Grant&#x60;funding
 * @param {Array} options.project_file files for grant
 * @param {Array} options.reviews reviews
 * @param {Array} options.posts posts related to project
 * @param {Boolean} options.is_project_private is &#x60;Project&#x60;private?
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



 
export function getProjects (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.university_id ID of &#x27;User&#x27; to fetch
 * @param {Function} callback
 */
export function getProjectsByUniversityId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.user_id ID of &#x27;User&#x27; to fetch
 * @param {Function} callback
 */
export function getProjectsByCreatorId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.user_id ID of &#x27;User&#x27; to fetch
 * @param {Function} callback
 */
export function getProjectsByCollaboratorId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.grant_id ID of &#x27;User&#x27; to fetch
 * @param {Function} callback
 */
export function getProjectsByGrantId (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getProjectsByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getProjectsByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date modified
 * @param {Function} callback
 */
export function getProjectsByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date modified
 * @param {Function} callback
 */
export function getProjectsByModifiedDate (options, callback) {
  // Implement you business logic here...
}

