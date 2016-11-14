'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.getPostsByAuthorId = function getPostsByAuthorId (req, res, next) {
  User.getPostsByAuthorId(req.swagger.params, res, next);
};

module.exports.getProjectsByCollaboratorId = function getProjectsByCollaboratorId (req, res, next) {
  User.getProjectsByCollaboratorId(req.swagger.params, res, next);
};

module.exports.getProjectsByCreatorId = function getProjectsByCreatorId (req, res, next) {
  User.getProjectsByCreatorId(req.swagger.params, res, next);
};

module.exports.getReviewsByReviewer = function getReviewsByReviewer (req, res, next) {
  User.getReviewsByReviewer(req.swagger.params, res, next);
};

module.exports.getUserSkillByUser = function getUserSkillByUser (req, res, next) {
  User.getUserSkillByUser(req.swagger.params, res, next);
};

module.exports.getUserSkills = function getUserSkills (req, res, next) {
  User.getUserSkills(req.swagger.params, res, next);
};

module.exports.getUserSkillsByCreatedDate = function getUserSkillsByCreatedDate (req, res, next) {
  User.getUserSkillsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getUserSkillsByCreatedDateForm = function getUserSkillsByCreatedDateForm (req, res, next) {
  User.getUserSkillsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillsByModifiedDate = function getUserSkillsByModifiedDate (req, res, next) {
  User.getUserSkillsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getUserSkillsByModifiedDateForm = function getUserSkillsByModifiedDateForm (req, res, next) {
  User.getUserSkillsByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillsbyEndorsementId = function getUserSkillsbyEndorsementId (req, res, next) {
  User.getUserSkillsbyEndorsementId(req.swagger.params, res, next);
};

module.exports.getUserSkillsbyEndorsementIds = function getUserSkillsbyEndorsementIds (req, res, next) {
  User.getUserSkillsbyEndorsementIds(req.swagger.params, res, next);
};

module.exports.getUsers = function getUsers (req, res, next) {
  User.getUsers(req.swagger.params, res, next);
};

module.exports.getUsersByCreatedDate = function getUsersByCreatedDate (req, res, next) {
  User.getUsersByCreatedDate(req.swagger.params, res, next);
};

module.exports.getUsersByCreatedDateForm = function getUsersByCreatedDateForm (req, res, next) {
  User.getUsersByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getUsersByKeywords = function getUsersByKeywords (req, res, next) {
  User.getUsersByKeywords(req.swagger.params, res, next);
};

module.exports.getUsersByModifiedDate = function getUsersByModifiedDate (req, res, next) {
  User.getUsersByModifiedDate(req.swagger.params, res, next);
};

module.exports.getUsersByModifiedDateForm = function getUsersByModifiedDateForm (req, res, next) {
  User.getUsersByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getUsersByProjectId = function getUsersByProjectId (req, res, next) {
  User.getUsersByProjectId(req.swagger.params, res, next);
};

module.exports.getUsersBySkills = function getUsersBySkills (req, res, next) {
  User.getUsersBySkills(req.swagger.params, res, next);
};

module.exports.getUsersByUniversityId = function getUsersByUniversityId (req, res, next) {
  User.getUsersByUniversityId(req.swagger.params, res, next);
};
