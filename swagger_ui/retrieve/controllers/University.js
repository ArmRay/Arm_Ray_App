'use strict';

var url = require('url');


var University = require('./UniversityService');


module.exports.getUniversitiesById = function getUniversitiesById (req, res, next) {
  University.getUniversitiesById(req.swagger.params, res, next);
};

module.exports.getUniversityById = function getUniversityById (req, res, next) {
  University.getUniversityById(req.swagger.params, res, next);
};

module.exports.getUniversityCityById = function getUniversityCityById (req, res, next) {
  University.getUniversityCityById(req.swagger.params, res, next);
};

module.exports.getUniversityGeolocationById = function getUniversityGeolocationById (req, res, next) {
  University.getUniversityGeolocationById(req.swagger.params, res, next);
};

module.exports.getUniversityNameById = function getUniversityNameById (req, res, next) {
  University.getUniversityNameById(req.swagger.params, res, next);
};

module.exports.getUniversityProjectsById = function getUniversityProjectsById (req, res, next) {
  University.getUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.getUniversityStateById = function getUniversityStateById (req, res, next) {
  University.getUniversityStateById(req.swagger.params, res, next);
};

module.exports.getUniversityimagesById = function getUniversityimagesById (req, res, next) {
  University.getUniversityimagesById(req.swagger.params, res, next);
};

module.exports.isUniversityCityById = function isUniversityCityById (req, res, next) {
  University.isUniversityCityById(req.swagger.params, res, next);
};

module.exports.isUniversityGeolocationById = function isUniversityGeolocationById (req, res, next) {
  University.isUniversityGeolocationById(req.swagger.params, res, next);
};

module.exports.isUniversityNameById = function isUniversityNameById (req, res, next) {
  University.isUniversityNameById(req.swagger.params, res, next);
};

module.exports.isUniversityOnProject = function isUniversityOnProject (req, res, next) {
  University.isUniversityOnProject(req.swagger.params, res, next);
};

module.exports.isUniversityOnUser = function isUniversityOnUser (req, res, next) {
  University.isUniversityOnUser(req.swagger.params, res, next);
};

module.exports.isUniversityProjectsById = function isUniversityProjectsById (req, res, next) {
  University.isUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.isUniversityStateById = function isUniversityStateById (req, res, next) {
  University.isUniversityStateById(req.swagger.params, res, next);
};
