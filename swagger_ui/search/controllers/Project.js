'use strict';

var url = require('url');


var Project = require('./ProjectService');


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

module.exports.getUniversitiesByProject = function getUniversitiesByProject (req, res, next) {
  Project.getUniversitiesByProject(req.swagger.params, res, next);
};

module.exports.getUniversitiesByProjectsForm = function getUniversitiesByProjectsForm (req, res, next) {
  Project.getUniversitiesByProjectsForm(req.swagger.params, res, next);
};

module.exports.getUsersByProjectId = function getUsersByProjectId (req, res, next) {
  Project.getUsersByProjectId(req.swagger.params, res, next);
};
