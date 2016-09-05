'use strict';

var url = require('url');


var University = require('./UniversityService');


module.exports.deleteProjecUniversities = function deleteProjecUniversities (req, res, next) {
  University.deleteProjecUniversities(req.swagger.params, res, next);
};

module.exports.deleteUserUniversityById = function deleteUserUniversityById (req, res, next) {
  University.deleteUserUniversityById(req.swagger.params, res, next);
};

module.exports.getProjectsByUniversityId = function getProjectsByUniversityId (req, res, next) {
  University.getProjectsByUniversityId(req.swagger.params, res, next);
};

module.exports.getUniversitiesById = function getUniversitiesById (req, res, next) {
  University.getUniversitiesById(req.swagger.params, res, next);
};

module.exports.getUsersByUniversityId = function getUsersByUniversityId (req, res, next) {
  University.getUsersByUniversityId(req.swagger.params, res, next);
};

module.exports.isUniversityOnProject = function isUniversityOnProject (req, res, next) {
  University.isUniversityOnProject(req.swagger.params, res, next);
};

module.exports.isUniversityOnUser = function isUniversityOnUser (req, res, next) {
  University.isUniversityOnUser(req.swagger.params, res, next);
};

module.exports.modifyProjectUniversity = function modifyProjectUniversity (req, res, next) {
  University.modifyProjectUniversity(req.swagger.params, res, next);
};

module.exports.setProjectUniversity = function setProjectUniversity (req, res, next) {
  University.setProjectUniversity(req.swagger.params, res, next);
};

module.exports.settUserUniversityById = function settUserUniversityById (req, res, next) {
  University.settUserUniversityById(req.swagger.params, res, next);
};
