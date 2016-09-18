'use strict';

var url = require('url');


var University = require('./UniversityService');


module.exports.getProjectsByUniversityId = function getProjectsByUniversityId (req, res, next) {
  University.getProjectsByUniversityId(req.swagger.params, res, next);
};

module.exports.getUniversities = function getUniversities (req, res, next) {
  University.getUniversities(req.swagger.params, res, next);
};

module.exports.getUniversitiesByCity = function getUniversitiesByCity (req, res, next) {
  University.getUniversitiesByCity(req.swagger.params, res, next);
};

module.exports.getUniversitiesByCityForm = function getUniversitiesByCityForm (req, res, next) {
  University.getUniversitiesByCityForm(req.swagger.params, res, next);
};

module.exports.getUniversitiesByCreatedDate = function getUniversitiesByCreatedDate (req, res, next) {
  University.getUniversitiesByCreatedDate(req.swagger.params, res, next);
};

module.exports.getUniversitiesByCreatedDateForm = function getUniversitiesByCreatedDateForm (req, res, next) {
  University.getUniversitiesByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getUniversitiesByGeolocationForm = function getUniversitiesByGeolocationForm (req, res, next) {
  University.getUniversitiesByGeolocationForm(req.swagger.params, res, next);
};

module.exports.getUniversitiesByGeolocationFormAndPath = function getUniversitiesByGeolocationFormAndPath (req, res, next) {
  University.getUniversitiesByGeolocationFormAndPath(req.swagger.params, res, next);
};

module.exports.getUniversitiesByGeolocationPath = function getUniversitiesByGeolocationPath (req, res, next) {
  University.getUniversitiesByGeolocationPath(req.swagger.params, res, next);
};

module.exports.getUniversitiesByModifiedDate = function getUniversitiesByModifiedDate (req, res, next) {
  University.getUniversitiesByModifiedDate(req.swagger.params, res, next);
};

module.exports.getUniversitiesByModifiedDateForm = function getUniversitiesByModifiedDateForm (req, res, next) {
  University.getUniversitiesByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getUniversitiesByName = function getUniversitiesByName (req, res, next) {
  University.getUniversitiesByName(req.swagger.params, res, next);
};

module.exports.getUniversitiesByNameForm = function getUniversitiesByNameForm (req, res, next) {
  University.getUniversitiesByNameForm(req.swagger.params, res, next);
};

module.exports.getUniversitiesByProject = function getUniversitiesByProject (req, res, next) {
  University.getUniversitiesByProject(req.swagger.params, res, next);
};

module.exports.getUniversitiesByProjectsForm = function getUniversitiesByProjectsForm (req, res, next) {
  University.getUniversitiesByProjectsForm(req.swagger.params, res, next);
};

module.exports.getUniversitiesByState = function getUniversitiesByState (req, res, next) {
  University.getUniversitiesByState(req.swagger.params, res, next);
};

module.exports.getUniversitiesByStateForm = function getUniversitiesByStateForm (req, res, next) {
  University.getUniversitiesByStateForm(req.swagger.params, res, next);
};

module.exports.getUsersByUniversityId = function getUsersByUniversityId (req, res, next) {
  University.getUsersByUniversityId(req.swagger.params, res, next);
};
