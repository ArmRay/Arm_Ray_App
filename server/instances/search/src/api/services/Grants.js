/**
 * @param {Object} options
 * @param {Number} options.size Max size of array to return
 * @param {Number} options.page Location in pagination
 * @param {String} options.grant_id Unique identifier representing a specific &#x60;Grant&#x60;
 * @param {String} options.created_date datetime stamp of &#x60;Grant&#x60; creation
 * @param {String} options.updated_date datetime stamp of &#x60;Grant&#x60; update
 * @param {Array} options.grant_url array of URLs in &#x60;Grant&#x60;
 * @param {String} options.grant_description array of keywords for &#x60;Grant&#x60;
 * @param {String} options.grant_amount Amount of &#x60;Grant&#x60;
 * @param {String} options.min_amount Minimum &#x60;Grant&#x60; amount to search
 * @param {String} options.max_amount Maximum &#x60;Grant&#x60; amount to search
 * @param {Function} callback
 */
export function getGrants (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Array} options.keywords Keywords when searching for user
 * @param {Function} callback
 */
export function getGrantsByKeywords (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.keyword keyword to search for
 * @param {Function} callback
 */
export function getGrantsByKeyword (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getGrantsByCreatedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.created_date date of creation
 * @param {Function} callback
 */
export function getGrantsByCreatedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of modification
 * @param {Function} callback
 */
export function getGrantsByModifiedDateForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {String} options.modified_date date of creation
 * @param {Function} callback
 */
export function getGrantsByModifiedDate (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.minimum minimum &#x60;Grant&#x60;amount
 * @param {Number} options.maximum maximum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.type The &#x60;Grant&#x60;type
 * @param {Function} callback
 */
export function getGrantsByTypeForm (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.type The &#x60;Grant&#x60;type
 * @param {Function} callback
 */
export function getGrantsByType (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.amount minimum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByMinAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.amount maxiumum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByMaxAmount (options, callback) {
  // Implement you business logic here...
}

/**
 * @param {Object} options
 * @param {Number} options.min maxiumum &#x60;Grant&#x60;amount
 * @param {Number} options.max maxiumum &#x60;Grant&#x60;amount
 * @param {Function} callback
 */
export function getGrantsByAmountRange (options, callback) {
  // Implement you business logic here...
}

