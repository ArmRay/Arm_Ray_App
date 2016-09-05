'use strict';

var url = require('url');


var Project = require('./ProjectService');


module.exports.addProjectCollaborator = function addProjectCollaborator (req, res, next) {
  Project.addProjectCollaborator(req.swagger.params, res, next);
};

module.exports.addProjectCollaborators = function addProjectCollaborators (req, res, next) {
  Project.addProjectCollaborators(req.swagger.params, res, next);
};

module.exports.addProjectCreator = function addProjectCreator (req, res, next) {
  Project.addProjectCreator(req.swagger.params, res, next);
};

module.exports.addProjectCreators = function addProjectCreators (req, res, next) {
  Project.addProjectCreators(req.swagger.params, res, next);
};

module.exports.addProjectFiles = function addProjectFiles (req, res, next) {
  Project.addProjectFiles(req.swagger.params, res, next);
};

module.exports.addProjectKeyword = function addProjectKeyword (req, res, next) {
  Project.addProjectKeyword(req.swagger.params, res, next);
};

module.exports.addProjectKeywords = function addProjectKeywords (req, res, next) {
  Project.addProjectKeywords(req.swagger.params, res, next);
};

module.exports.addProjectName = function addProjectName (req, res, next) {
  Project.addProjectName(req.swagger.params, res, next);
};

module.exports.addProjectPost = function addProjectPost (req, res, next) {
  Project.addProjectPost(req.swagger.params, res, next);
};

module.exports.addProjectPosts = function addProjectPosts (req, res, next) {
  Project.addProjectPosts(req.swagger.params, res, next);
};

module.exports.addProjectReview = function addProjectReview (req, res, next) {
  Project.addProjectReview(req.swagger.params, res, next);
};

module.exports.addProjectReviews = function addProjectReviews (req, res, next) {
  Project.addProjectReviews(req.swagger.params, res, next);
};

module.exports.addProjectUrls = function addProjectUrls (req, res, next) {
  Project.addProjectUrls(req.swagger.params, res, next);
};

module.exports.createProject = function createProject (req, res, next) {
  Project.createProject(req.swagger.params, res, next);
};

module.exports.deleteAllUserProjectById = function deleteAllUserProjectById (req, res, next) {
  Project.deleteAllUserProjectById(req.swagger.params, res, next);
};

module.exports.deleteProjecUniversities = function deleteProjecUniversities (req, res, next) {
  Project.deleteProjecUniversities(req.swagger.params, res, next);
};

module.exports.deleteProjectById = function deleteProjectById (req, res, next) {
  Project.deleteProjectById(req.swagger.params, res, next);
};

module.exports.deleteProjectCollaborator = function deleteProjectCollaborator (req, res, next) {
  Project.deleteProjectCollaborator(req.swagger.params, res, next);
};

module.exports.deleteProjectCollaborators = function deleteProjectCollaborators (req, res, next) {
  Project.deleteProjectCollaborators(req.swagger.params, res, next);
};

module.exports.deleteProjectCreator = function deleteProjectCreator (req, res, next) {
  Project.deleteProjectCreator(req.swagger.params, res, next);
};

module.exports.deleteProjectCreators = function deleteProjectCreators (req, res, next) {
  Project.deleteProjectCreators(req.swagger.params, res, next);
};

module.exports.deleteProjectDescription = function deleteProjectDescription (req, res, next) {
  Project.deleteProjectDescription(req.swagger.params, res, next);
};

module.exports.deleteProjectFiles = function deleteProjectFiles (req, res, next) {
  Project.deleteProjectFiles(req.swagger.params, res, next);
};

module.exports.deleteProjectGrant = function deleteProjectGrant (req, res, next) {
  Project.deleteProjectGrant(req.swagger.params, res, next);
};

module.exports.deleteProjectGrantType = function deleteProjectGrantType (req, res, next) {
  Project.deleteProjectGrantType(req.swagger.params, res, next);
};

module.exports.deleteProjectKeyword = function deleteProjectKeyword (req, res, next) {
  Project.deleteProjectKeyword(req.swagger.params, res, next);
};

module.exports.deleteProjectKeywords = function deleteProjectKeywords (req, res, next) {
  Project.deleteProjectKeywords(req.swagger.params, res, next);
};

module.exports.deleteProjectPost = function deleteProjectPost (req, res, next) {
  Project.deleteProjectPost(req.swagger.params, res, next);
};

module.exports.deleteProjectPosts = function deleteProjectPosts (req, res, next) {
  Project.deleteProjectPosts(req.swagger.params, res, next);
};

module.exports.deleteProjectReview = function deleteProjectReview (req, res, next) {
  Project.deleteProjectReview(req.swagger.params, res, next);
};

module.exports.deleteProjectReviews = function deleteProjectReviews (req, res, next) {
  Project.deleteProjectReviews(req.swagger.params, res, next);
};

module.exports.deleteProjectUrls = function deleteProjectUrls (req, res, next) {
  Project.deleteProjectUrls(req.swagger.params, res, next);
};

module.exports.deleteUserProjectById = function deleteUserProjectById (req, res, next) {
  Project.deleteUserProjectById(req.swagger.params, res, next);
};

module.exports.deleteUserProjectName = function deleteUserProjectName (req, res, next) {
  Project.deleteUserProjectName(req.swagger.params, res, next);
};

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

module.exports.getProjectGrantTypeById = function getProjectGrantTypeById (req, res, next) {
  Project.getProjectGrantTypeById(req.swagger.params, res, next);
};

module.exports.getProjectNameById = function getProjectNameById (req, res, next) {
  Project.getProjectNameById(req.swagger.params, res, next);
};

module.exports.getProjects = function getProjects (req, res, next) {
  Project.getProjects(req.swagger.params, res, next);
};

module.exports.getProjectsByCollaboratorId = function getProjectsByCollaboratorId (req, res, next) {
  Project.getProjectsByCollaboratorId(req.swagger.params, res, next);
};

module.exports.getProjectsByCreatedDate = function getProjectsByCreatedDate (req, res, next) {
  Project.getProjectsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getProjectsByCreatedDateForm = function getProjectsByCreatedDateForm (req, res, next) {
  Project.getProjectsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getProjectsByCreatorId = function getProjectsByCreatorId (req, res, next) {
  Project.getProjectsByCreatorId(req.swagger.params, res, next);
};

module.exports.getProjectsByGrantId = function getProjectsByGrantId (req, res, next) {
  Project.getProjectsByGrantId(req.swagger.params, res, next);
};

module.exports.getProjectsByModifiedDate = function getProjectsByModifiedDate (req, res, next) {
  Project.getProjectsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getProjectsByModifiedDateForm = function getProjectsByModifiedDateForm (req, res, next) {
  Project.getProjectsByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getProjectsByUniversityId = function getProjectsByUniversityId (req, res, next) {
  Project.getProjectsByUniversityId(req.swagger.params, res, next);
};

module.exports.getUniversitiesById = function getUniversitiesById (req, res, next) {
  Project.getUniversitiesById(req.swagger.params, res, next);
};

module.exports.getUsersByProjectId = function getUsersByProjectId (req, res, next) {
  Project.getUsersByProjectId(req.swagger.params, res, next);
};

module.exports.isGrantOnProject = function isGrantOnProject (req, res, next) {
  Project.isGrantOnProject(req.swagger.params, res, next);
};

module.exports.isGrantTypeOnProject = function isGrantTypeOnProject (req, res, next) {
  Project.isGrantTypeOnProject(req.swagger.params, res, next);
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

module.exports.isUserCollaboratorOnProject = function isUserCollaboratorOnProject (req, res, next) {
  Project.isUserCollaboratorOnProject(req.swagger.params, res, next);
};

module.exports.isUserCreatorOnProject = function isUserCreatorOnProject (req, res, next) {
  Project.isUserCreatorOnProject(req.swagger.params, res, next);
};

module.exports.isUserOnProjectById = function isUserOnProjectById (req, res, next) {
  Project.isUserOnProjectById(req.swagger.params, res, next);
};

module.exports.modifyProjectDescription = function modifyProjectDescription (req, res, next) {
  Project.modifyProjectDescription(req.swagger.params, res, next);
};

module.exports.modifyProjectGrant = function modifyProjectGrant (req, res, next) {
  Project.modifyProjectGrant(req.swagger.params, res, next);
};

module.exports.modifyProjectGrantType = function modifyProjectGrantType (req, res, next) {
  Project.modifyProjectGrantType(req.swagger.params, res, next);
};

module.exports.modifyProjectName = function modifyProjectName (req, res, next) {
  Project.modifyProjectName(req.swagger.params, res, next);
};

module.exports.modifyProjectUniversity = function modifyProjectUniversity (req, res, next) {
  Project.modifyProjectUniversity(req.swagger.params, res, next);
};

module.exports.setAllProjectCollaborators = function setAllProjectCollaborators (req, res, next) {
  Project.setAllProjectCollaborators(req.swagger.params, res, next);
};

module.exports.setAllProjectCreators = function setAllProjectCreators (req, res, next) {
  Project.setAllProjectCreators(req.swagger.params, res, next);
};

module.exports.setAllProjectFiles = function setAllProjectFiles (req, res, next) {
  Project.setAllProjectFiles(req.swagger.params, res, next);
};

module.exports.setAllProjectKeywords = function setAllProjectKeywords (req, res, next) {
  Project.setAllProjectKeywords(req.swagger.params, res, next);
};

module.exports.setAllProjectPosts = function setAllProjectPosts (req, res, next) {
  Project.setAllProjectPosts(req.swagger.params, res, next);
};

module.exports.setAllProjectReviews = function setAllProjectReviews (req, res, next) {
  Project.setAllProjectReviews(req.swagger.params, res, next);
};

module.exports.setAllProjectUrls = function setAllProjectUrls (req, res, next) {
  Project.setAllProjectUrls(req.swagger.params, res, next);
};

module.exports.setIsProjectPrivate = function setIsProjectPrivate (req, res, next) {
  Project.setIsProjectPrivate(req.swagger.params, res, next);
};

module.exports.setProjectCollaborators = function setProjectCollaborators (req, res, next) {
  Project.setProjectCollaborators(req.swagger.params, res, next);
};

module.exports.setProjectCreator = function setProjectCreator (req, res, next) {
  Project.setProjectCreator(req.swagger.params, res, next);
};

module.exports.setProjectDescription = function setProjectDescription (req, res, next) {
  Project.setProjectDescription(req.swagger.params, res, next);
};

module.exports.setProjectGrant = function setProjectGrant (req, res, next) {
  Project.setProjectGrant(req.swagger.params, res, next);
};

module.exports.setProjectGrantType = function setProjectGrantType (req, res, next) {
  Project.setProjectGrantType(req.swagger.params, res, next);
};

module.exports.setProjectKeyword = function setProjectKeyword (req, res, next) {
  Project.setProjectKeyword(req.swagger.params, res, next);
};

module.exports.setProjectUniversity = function setProjectUniversity (req, res, next) {
  Project.setProjectUniversity(req.swagger.params, res, next);
};

module.exports.settUserProjectById = function settUserProjectById (req, res, next) {
  Project.settUserProjectById(req.swagger.params, res, next);
};

module.exports.updateProject = function updateProject (req, res, next) {
  Project.updateProject(req.swagger.params, res, next);
};
