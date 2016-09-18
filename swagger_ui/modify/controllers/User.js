'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.addPostTagsByIdPost = function addPostTagsByIdPost (req, res, next) {
  User.addPostTagsByIdPost(req.swagger.params, res, next);
};

module.exports.addProjectCollaborator = function addProjectCollaborator (req, res, next) {
  User.addProjectCollaborator(req.swagger.params, res, next);
};

module.exports.addProjectCollaborators = function addProjectCollaborators (req, res, next) {
  User.addProjectCollaborators(req.swagger.params, res, next);
};

module.exports.addProjectCreator = function addProjectCreator (req, res, next) {
  User.addProjectCreator(req.swagger.params, res, next);
};

module.exports.addProjectCreators = function addProjectCreators (req, res, next) {
  User.addProjectCreators(req.swagger.params, res, next);
};

module.exports.addUserCity = function addUserCity (req, res, next) {
  User.addUserCity(req.swagger.params, res, next);
};

module.exports.addUserFirstName = function addUserFirstName (req, res, next) {
  User.addUserFirstName(req.swagger.params, res, next);
};

module.exports.addUserLastName = function addUserLastName (req, res, next) {
  User.addUserLastName(req.swagger.params, res, next);
};

module.exports.addUserSkill = function addUserSkill (req, res, next) {
  User.addUserSkill(req.swagger.params, res, next);
};

module.exports.addUserSkillEndorsementById = function addUserSkillEndorsementById (req, res, next) {
  User.addUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.addUserSkillEndorsementsById = function addUserSkillEndorsementsById (req, res, next) {
  User.addUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.addUserSkills = function addUserSkills (req, res, next) {
  User.addUserSkills(req.swagger.params, res, next);
};

module.exports.addUserState = function addUserState (req, res, next) {
  User.addUserState(req.swagger.params, res, next);
};

module.exports.createUser = function createUser (req, res, next) {
  User.createUser(req.swagger.params, res, next);
};

module.exports.createUserSkill = function createUserSkill (req, res, next) {
  User.createUserSkill(req.swagger.params, res, next);
};

module.exports.deleteAllUserProjectById = function deleteAllUserProjectById (req, res, next) {
  User.deleteAllUserProjectById(req.swagger.params, res, next);
};

module.exports.deleteAllUserReviewById = function deleteAllUserReviewById (req, res, next) {
  User.deleteAllUserReviewById(req.swagger.params, res, next);
};

module.exports.deleteImagesFromUserById = function deleteImagesFromUserById (req, res, next) {
  User.deleteImagesFromUserById(req.swagger.params, res, next);
};

module.exports.deleteKeywordFromUserById = function deleteKeywordFromUserById (req, res, next) {
  User.deleteKeywordFromUserById(req.swagger.params, res, next);
};

module.exports.deleteKeywordsFromUserById = function deleteKeywordsFromUserById (req, res, next) {
  User.deleteKeywordsFromUserById(req.swagger.params, res, next);
};

module.exports.deletePostTagsById = function deletePostTagsById (req, res, next) {
  User.deletePostTagsById(req.swagger.params, res, next);
};

module.exports.deleteProjectCollaborator = function deleteProjectCollaborator (req, res, next) {
  User.deleteProjectCollaborator(req.swagger.params, res, next);
};

module.exports.deleteProjectCollaborators = function deleteProjectCollaborators (req, res, next) {
  User.deleteProjectCollaborators(req.swagger.params, res, next);
};

module.exports.deleteProjectCreator = function deleteProjectCreator (req, res, next) {
  User.deleteProjectCreator(req.swagger.params, res, next);
};

module.exports.deleteProjectCreators = function deleteProjectCreators (req, res, next) {
  User.deleteProjectCreators(req.swagger.params, res, next);
};

module.exports.deleteReviewReviewer = function deleteReviewReviewer (req, res, next) {
  User.deleteReviewReviewer(req.swagger.params, res, next);
};

module.exports.deleteReviewReviewerById = function deleteReviewReviewerById (req, res, next) {
  User.deleteReviewReviewerById(req.swagger.params, res, next);
};

module.exports.deleteSkillFromUserById = function deleteSkillFromUserById (req, res, next) {
  User.deleteSkillFromUserById(req.swagger.params, res, next);
};

module.exports.deleteSkillsFromUserById = function deleteSkillsFromUserById (req, res, next) {
  User.deleteSkillsFromUserById(req.swagger.params, res, next);
};

module.exports.deleteUserById = function deleteUserById (req, res, next) {
  User.deleteUserById(req.swagger.params, res, next);
};

module.exports.deleteUserCity = function deleteUserCity (req, res, next) {
  User.deleteUserCity(req.swagger.params, res, next);
};

module.exports.deleteUserFirstName = function deleteUserFirstName (req, res, next) {
  User.deleteUserFirstName(req.swagger.params, res, next);
};

module.exports.deleteUserLastName = function deleteUserLastName (req, res, next) {
  User.deleteUserLastName(req.swagger.params, res, next);
};

module.exports.deleteUserProjectById = function deleteUserProjectById (req, res, next) {
  User.deleteUserProjectById(req.swagger.params, res, next);
};

module.exports.deleteUserReviewById = function deleteUserReviewById (req, res, next) {
  User.deleteUserReviewById(req.swagger.params, res, next);
};

module.exports.deleteUserSkillSkilById = function deleteUserSkillSkilById (req, res, next) {
  User.deleteUserSkillSkilById(req.swagger.params, res, next);
};

module.exports.deleteUserSkillwById = function deleteUserSkillwById (req, res, next) {
  User.deleteUserSkillwById(req.swagger.params, res, next);
};

module.exports.deleteUserState = function deleteUserState (req, res, next) {
  User.deleteUserState(req.swagger.params, res, next);
};

module.exports.deleteUserUniversityById = function deleteUserUniversityById (req, res, next) {
  User.deleteUserUniversityById(req.swagger.params, res, next);
};

module.exports.modifyUserCity = function modifyUserCity (req, res, next) {
  User.modifyUserCity(req.swagger.params, res, next);
};

module.exports.modifyUserFirstName = function modifyUserFirstName (req, res, next) {
  User.modifyUserFirstName(req.swagger.params, res, next);
};

module.exports.modifyUserLastName = function modifyUserLastName (req, res, next) {
  User.modifyUserLastName(req.swagger.params, res, next);
};

module.exports.modifyUserState = function modifyUserState (req, res, next) {
  User.modifyUserState(req.swagger.params, res, next);
};

module.exports.removeUserSkillEndorsementById = function removeUserSkillEndorsementById (req, res, next) {
  User.removeUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.removeUserSkillEndorsementsById = function removeUserSkillEndorsementsById (req, res, next) {
  User.removeUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.setAllProjectCollaborators = function setAllProjectCollaborators (req, res, next) {
  User.setAllProjectCollaborators(req.swagger.params, res, next);
};

module.exports.setAllProjectCreators = function setAllProjectCreators (req, res, next) {
  User.setAllProjectCreators(req.swagger.params, res, next);
};

module.exports.setIsUserCollaboratorById = function setIsUserCollaboratorById (req, res, next) {
  User.setIsUserCollaboratorById(req.swagger.params, res, next);
};

module.exports.setIsUserCollaboratorByIdPut = function setIsUserCollaboratorByIdPut (req, res, next) {
  User.setIsUserCollaboratorByIdPut(req.swagger.params, res, next);
};

module.exports.setIsUserCreatorById = function setIsUserCreatorById (req, res, next) {
  User.setIsUserCreatorById(req.swagger.params, res, next);
};

module.exports.setIsUserCreatorByIdPut = function setIsUserCreatorByIdPut (req, res, next) {
  User.setIsUserCreatorByIdPut(req.swagger.params, res, next);
};

module.exports.setProjectCollaborators = function setProjectCollaborators (req, res, next) {
  User.setProjectCollaborators(req.swagger.params, res, next);
};

module.exports.setProjectCreator = function setProjectCreator (req, res, next) {
  User.setProjectCreator(req.swagger.params, res, next);
};

module.exports.setReviewReviewerById = function setReviewReviewerById (req, res, next) {
  User.setReviewReviewerById(req.swagger.params, res, next);
};

module.exports.setUserImages = function setUserImages (req, res, next) {
  User.setUserImages(req.swagger.params, res, next);
};

module.exports.setUserKeyword = function setUserKeyword (req, res, next) {
  User.setUserKeyword(req.swagger.params, res, next);
};

module.exports.setUserKeywords = function setUserKeywords (req, res, next) {
  User.setUserKeywords(req.swagger.params, res, next);
};

module.exports.setUserReviewById = function setUserReviewById (req, res, next) {
  User.setUserReviewById(req.swagger.params, res, next);
};

module.exports.setUserSkill = function setUserSkill (req, res, next) {
  User.setUserSkill(req.swagger.params, res, next);
};

module.exports.setUserSkillEndorsementById = function setUserSkillEndorsementById (req, res, next) {
  User.setUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.setUserSkillEndorsementsById = function setUserSkillEndorsementsById (req, res, next) {
  User.setUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.setUserSkillSkillDescriptionById = function setUserSkillSkillDescriptionById (req, res, next) {
  User.setUserSkillSkillDescriptionById(req.swagger.params, res, next);
};

module.exports.setUserSkillUserById = function setUserSkillUserById (req, res, next) {
  User.setUserSkillUserById(req.swagger.params, res, next);
};

module.exports.setUserSkills = function setUserSkills (req, res, next) {
  User.setUserSkills(req.swagger.params, res, next);
};

module.exports.settUserProjectById = function settUserProjectById (req, res, next) {
  User.settUserProjectById(req.swagger.params, res, next);
};

module.exports.settUserUniversityById = function settUserUniversityById (req, res, next) {
  User.settUserUniversityById(req.swagger.params, res, next);
};

module.exports.updatePostTagsById = function updatePostTagsById (req, res, next) {
  User.updatePostTagsById(req.swagger.params, res, next);
};

module.exports.updateReviewReviewerById = function updateReviewReviewerById (req, res, next) {
  User.updateReviewReviewerById(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  User.updateUser(req.swagger.params, res, next);
};

module.exports.updateUserSkillById = function updateUserSkillById (req, res, next) {
  User.updateUserSkillById(req.swagger.params, res, next);
};

module.exports.updateUserSkillSkill = function updateUserSkillSkill (req, res, next) {
  User.updateUserSkillSkill(req.swagger.params, res, next);
};

module.exports.updateUserSkillUserById = function updateUserSkillUserById (req, res, next) {
  User.updateUserSkillUserById(req.swagger.params, res, next);
};
