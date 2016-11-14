'use strict';

var url = require('url');


var Project = require('./ProjectService');


module.exports.getAllProjectCollaborators = function getAllProjectCollaborators (req, res, next) {
  Project.getAllProjectCollaborators(req.swagger.params, res, next);
};

module.exports.getAllProjectCreators = function getAllProjectCreators (req, res, next) {
  Project.getAllProjectCreators(req.swagger.params, res, next);
};

module.exports.getAllProjectFiles = function getAllProjectFiles (req, res, next) {
  Project.getAllProjectFiles(req.swagger.params, res, next);
};

module.exports.getAllProjectKeywords = function getAllProjectKeywords (req, res, next) {
  Project.getAllProjectKeywords(req.swagger.params, res, next);
};

module.exports.getAllProjectPosts = function getAllProjectPosts (req, res, next) {
  Project.getAllProjectPosts(req.swagger.params, res, next);
};

module.exports.getAllProjectReviews = function getAllProjectReviews (req, res, next) {
  Project.getAllProjectReviews(req.swagger.params, res, next);
};

module.exports.getAllProjectUrls = function getAllProjectUrls (req, res, next) {
  Project.getAllProjectUrls(req.swagger.params, res, next);
};

module.exports.getAllUserProjectById = function getAllUserProjectById (req, res, next) {
  Project.getAllUserProjectById(req.swagger.params, res, next);
};

module.exports.getProjectById = function getProjectById (req, res, next) {
  Project.getProjectById(req.swagger.params, res, next);
};

module.exports.getProjectDescriptionById = function getProjectDescriptionById (req, res, next) {
  Project.getProjectDescriptionById(req.swagger.params, res, next);
};

module.exports.getProjectGrantById = function getProjectGrantById (req, res, next) {
  Project.getProjectGrantById(req.swagger.params, res, next);
};

module.exports.getProjectNameById = function getProjectNameById (req, res, next) {
  Project.getProjectNameById(req.swagger.params, res, next);
};

module.exports.getUniversitiesById = function getUniversitiesById (req, res, next) {
  Project.getUniversitiesById(req.swagger.params, res, next);
};

module.exports.getUniversityProjectsById = function getUniversityProjectsById (req, res, next) {
  Project.getUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.isGrantOnProject = function isGrantOnProject (req, res, next) {
  Project.isGrantOnProject(req.swagger.params, res, next);
};

module.exports.isKeywordOnProject = function isKeywordOnProject (req, res, next) {
  Project.isKeywordOnProject(req.swagger.params, res, next);
};

module.exports.isNameOnProject = function isNameOnProject (req, res, next) {
  Project.isNameOnProject(req.swagger.params, res, next);
};

module.exports.isPostOnProject = function isPostOnProject (req, res, next) {
  Project.isPostOnProject(req.swagger.params, res, next);
};

module.exports.isProjectDescriptionOnProject = function isProjectDescriptionOnProject (req, res, next) {
  Project.isProjectDescriptionOnProject(req.swagger.params, res, next);
};

module.exports.isProjectPrivate = function isProjectPrivate (req, res, next) {
  Project.isProjectPrivate(req.swagger.params, res, next);
};

module.exports.isReviewOnOProject = function isReviewOnOProject (req, res, next) {
  Project.isReviewOnOProject(req.swagger.params, res, next);
};

module.exports.isUniversityOnProject = function isUniversityOnProject (req, res, next) {
  Project.isUniversityOnProject(req.swagger.params, res, next);
};

module.exports.isUniversityProjectsById = function isUniversityProjectsById (req, res, next) {
  Project.isUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.isUserCollaboratorOnProject = function isUserCollaboratorOnProject (req, res, next) {
  Project.isUserCollaboratorOnProject(req.swagger.params, res, next);
};

module.exports.isUserCreatorOnProject = function isUserCreatorOnProject (req, res, next) {
  Project.isUserCreatorOnProject(req.swagger.params, res, next);
};

module.exports.isUserOnProjectById = function isUserOnProjectById (req, res, next) {
  Project.isUserOnProjectById(req.swagger.params, res, next);
};
