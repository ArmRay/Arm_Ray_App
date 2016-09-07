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

module.exports.getPostsByAuthorId = function getPostsByAuthorId (req, res, next) {
  User.getPostsByAuthorId(req.swagger.params, res, next);
};

module.exports.getProjectsByCollaboratorId = function getProjectsByCollaboratorId (req, res, next) {
  User.getProjectsByCollaboratorId(req.swagger.params, res, next);
};

module.exports.getProjectsByCreatorId = function getProjectsByCreatorId (req, res, next) {
  User.getProjectsByCreatorId(req.swagger.params, res, next);
};

module.exports.getReviewReviewerById = function getReviewReviewerById (req, res, next) {
  User.getReviewReviewerById(req.swagger.params, res, next);
};

module.exports.getReviewsByReviewer = function getReviewsByReviewer (req, res, next) {
  User.getReviewsByReviewer(req.swagger.params, res, next);
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

module.exports.getUserSkillByUser = function getUserSkillByUser (req, res, next) {
  User.getUserSkillByUser(req.swagger.params, res, next);
};

module.exports.getUserSkillEndorsementById = function getUserSkillEndorsementById (req, res, next) {
  User.getUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.getUserSkillUserById = function getUserSkillUserById (req, res, next) {
  User.getUserSkillUserById(req.swagger.params, res, next);
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
