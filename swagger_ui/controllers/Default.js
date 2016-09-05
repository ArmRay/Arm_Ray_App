'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.addProjectCollaborator = function addProjectCollaborator (req, res, next) {
  Default.addProjectCollaborator(req.swagger.params, res, next);
};

module.exports.addProjectReviews = function addProjectReviews (req, res, next) {
  Default.addProjectReviews(req.swagger.params, res, next);
};

module.exports.deleteProjectCollaborator = function deleteProjectCollaborator (req, res, next) {
  Default.deleteProjectCollaborator(req.swagger.params, res, next);
};

module.exports.deleteProjectReviews = function deleteProjectReviews (req, res, next) {
  Default.deleteProjectReviews(req.swagger.params, res, next);
};

module.exports.deleteProjectTagsById = function deleteProjectTagsById (req, res, next) {
  Default.deleteProjectTagsById(req.swagger.params, res, next);
};

module.exports.deleteUserById = function deleteUserById (req, res, next) {
  Default.deleteUserById(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  Default.getUserById(req.swagger.params, res, next);
};

module.exports.setAllProjectReviews = function setAllProjectReviews (req, res, next) {
  Default.setAllProjectReviews(req.swagger.params, res, next);
};

module.exports.setProjectCollaborators = function setProjectCollaborators (req, res, next) {
  Default.setProjectCollaborators(req.swagger.params, res, next);
};
