/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.university_id Unique identifier representing a specific &#x60;University&#x60;
 * @param {String} options.name Name of a &#x60;University&#x60;
 * @param {String} options.city City of &#x60;University&#x60;
 * @param {String} options.state City of &#x60;University&#x60;
 * @param {String} options.created_date datetime stamp of &#x60;University&#x60; creation
 * @param {String} options.updated_date datetime stamp of &#x60;University&#x60; update
 * @param {Array} options.project_ids id of &#x60;Project&#x60; objects at this university
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


 
export function getUniversities (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getUniversitiesByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getUniversitiesByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of modification
 * @param {Function} callback
 */
export function getUniversitiesByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of creation
 * @param {Function} callback
 */
export function getUniversitiesByModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.name Name of &#x60;University&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByName (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.name Name of &#x60;University&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByNameForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.city City of &#x60;University&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByCity (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.city City of &#x60;University&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByCityForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.state State of &#x60;University&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByState (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.state State of &#x60;University&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByStateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.lat State of &#x60;University&#x60; to search for
 * @param {Number} options.long State of &#x60;University&#x60; to search for
 * @param {Number} options.radius Radius from specified lat and long to search, defaults to 25 miles if not specified
 * @param {Function} callback
 */
export function getUniversitiesByGeolocationForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.lat State of &#x60;University&#x60; to search for
 * @param {Number} options.long State of &#x60;University&#x60; to search for
 * @param {Number} options.radius Radius from specified lat and long to search, defaults to 25 miles if not specified
 * @param {Function} callback
 */
export function getUniversitiesByGeolocationFormAndPath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.lat State of &#x60;University&#x60; to search for
 * @param {Number} options.long State of &#x60;University&#x60; to search for
 * @param {Number} options.radius Radius from specified lat and long to search, defaults to 25 miles if not specified
 * @param {Function} callback
 */
export function getUniversitiesByGeolocationPath (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.project_id ID of &#x60;Project&#x60; to search for
 * @param {Function} callback
 */
export function getUniversitiesByProject (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.projects Array of &#x60;Project&#x60; id items to search for
 * @param {Function} callback
 */
export function getUniversitiesByProjectsForm (options, callback) {
  // Implement you business logic here...
}

