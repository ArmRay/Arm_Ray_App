'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.getAllProjectCollaborators = function getAllProjectCollaborators (req, res, next) {
  User.getAllProjectCollaborators(req.swagger.params, res, next);
};

module.exports.getAllProjectCreators = function getAllProjectCreators (req, res, next) {
  User.getAllProjectCreators(req.swagger.params, res, next);
};

module.exports.getAllUserImages = function getAllUserImages (req, res, next) {
  User.getAllUserImages(req.swagger.params, res, next);
};

module.exports.getAllUserKeywords = function getAllUserKeywords (req, res, next) {
  User.getAllUserKeywords(req.swagger.params, res, next);
};

module.exports.getAllUserProjectById = function getAllUserProjectById (req, res, next) {
  User.getAllUserProjectById(req.swagger.params, res, next);
};

module.exports.getAllUserReviewById = function getAllUserReviewById (req, res, next) {
  User.getAllUserReviewById(req.swagger.params, res, next);
};

module.exports.getAllUserSkills = function getAllUserSkills (req, res, next) {
  User.getAllUserSkills(req.swagger.params, res, next);
};

module.exports.getCityNameById = function getCityNameById (req, res, next) {
  User.getCityNameById(req.swagger.params, res, next);
};

module.exports.getCreatedDateById = function getCreatedDateById (req, res, next) {
  User.getCreatedDateById(req.swagger.params, res, next);
};

module.exports.getFirstNameById = function getFirstNameById (req, res, next) {
  User.getFirstNameById(req.swagger.params, res, next);
};

module.exports.getIsSkillOnUser = function getIsSkillOnUser (req, res, next) {
  User.getIsSkillOnUser(req.swagger.params, res, next);
};

module.exports.getIsUserTagOnProject = function getIsUserTagOnProject (req, res, next) {
  User.getIsUserTagOnProject(req.swagger.params, res, next);
};

module.exports.getLastNameById = function getLastNameById (req, res, next) {
  User.getLastNameById(req.swagger.params, res, next);
};

module.exports.getModifiedDateById = function getModifiedDateById (req, res, next) {
  User.getModifiedDateById(req.swagger.params, res, next);
};

module.exports.getPostAuthorById = function getPostAuthorById (req, res, next) {
  User.getPostAuthorById(req.swagger.params, res, next);
};

module.exports.getReviewReviewerById = function getReviewReviewerById (req, res, next) {
  User.getReviewReviewerById(req.swagger.params, res, next);
};

module.exports.getStateById = function getStateById (req, res, next) {
  User.getStateById(req.swagger.params, res, next);
};

module.exports.getUSerSkillSkillById = function getUSerSkillSkillById (req, res, next) {
  User.getUSerSkillSkillById(req.swagger.params, res, next);
};

module.exports.getUserById = function getUserById (req, res, next) {
  User.getUserById(req.swagger.params, res, next);
};

module.exports.getUserSkillById = function getUserSkillById (req, res, next) {
  User.getUserSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillEndorsementById = function getUserSkillEndorsementById (req, res, next) {
  User.getUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.getUserSkillUserById = function getUserSkillUserById (req, res, next) {
  User.getUserSkillUserById(req.swagger.params, res, next);
};

module.exports.isCollaboratorById = function isCollaboratorById (req, res, next) {
  User.isCollaboratorById(req.swagger.params, res, next);
};

module.exports.isCreatorById = function isCreatorById (req, res, next) {
  User.isCreatorById(req.swagger.params, res, next);
};

module.exports.isReviewOnUserById = function isReviewOnUserById (req, res, next) {
  User.isReviewOnUserById(req.swagger.params, res, next);
};

module.exports.isUniversityOnUser = function isUniversityOnUser (req, res, next) {
  User.isUniversityOnUser(req.swagger.params, res, next);
};

module.exports.isUserCity = function isUserCity (req, res, next) {
  User.isUserCity(req.swagger.params, res, next);
};

module.exports.isUserCollaboratorOnProject = function isUserCollaboratorOnProject (req, res, next) {
  User.isUserCollaboratorOnProject(req.swagger.params, res, next);
};

module.exports.isUserCreatorOnProject = function isUserCreatorOnProject (req, res, next) {
  User.isUserCreatorOnProject(req.swagger.params, res, next);
};

module.exports.isUserFirstName = function isUserFirstName (req, res, next) {
  User.isUserFirstName(req.swagger.params, res, next);
};

module.exports.isUserHaveKeyword = function isUserHaveKeyword (req, res, next) {
  User.isUserHaveKeyword(req.swagger.params, res, next);
};

module.exports.isUserLastName = function isUserLastName (req, res, next) {
  User.isUserLastName(req.swagger.params, res, next);
};

module.exports.isUserOnProjectById = function isUserOnProjectById (req, res, next) {
  User.isUserOnProjectById(req.swagger.params, res, next);
};

module.exports.isUserReviewReviewer = function isUserReviewReviewer (req, res, next) {
  User.isUserReviewReviewer(req.swagger.params, res, next);
};

module.exports.isUserState = function isUserState (req, res, next) {
  User.isUserState(req.swagger.params, res, next);
};
