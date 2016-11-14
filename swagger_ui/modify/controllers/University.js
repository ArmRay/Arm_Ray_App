'use strict';

var url = require('url');


var University = require('./UniversityService');


module.exports.addUniversityProfileImagesById = function addUniversityProfileImagesById (req, res, next) {
  University.addUniversityProfileImagesById(req.swagger.params, res, next);
};

module.exports.addUniversityProjectById = function addUniversityProjectById (req, res, next) {
  University.addUniversityProjectById(req.swagger.params, res, next);
};

module.exports.addUniversityProjectsById = function addUniversityProjectsById (req, res, next) {
  University.addUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.createUniversity = function createUniversity (req, res, next) {
  University.createUniversity(req.swagger.params, res, next);
};

module.exports.deleteProjecUniversities = function deleteProjecUniversities (req, res, next) {
  University.deleteProjecUniversities(req.swagger.params, res, next);
};

module.exports.deleteUniversityById = function deleteUniversityById (req, res, next) {
  University.deleteUniversityById(req.swagger.params, res, next);
};

module.exports.deleteUniversityCityById = function deleteUniversityCityById (req, res, next) {
  University.deleteUniversityCityById(req.swagger.params, res, next);
};

module.exports.deleteUniversityGeolocationById = function deleteUniversityGeolocationById (req, res, next) {
  University.deleteUniversityGeolocationById(req.swagger.params, res, next);
};

module.exports.deleteUniversityImagesById = function deleteUniversityImagesById (req, res, next) {
  University.deleteUniversityImagesById(req.swagger.params, res, next);
};

module.exports.deleteUniversityNameById = function deleteUniversityNameById (req, res, next) {
  University.deleteUniversityNameById(req.swagger.params, res, next);
};

module.exports.deleteUniversityProjectById = function deleteUniversityProjectById (req, res, next) {
  University.deleteUniversityProjectById(req.swagger.params, res, next);
};

module.exports.deleteUniversityProjectsById = function deleteUniversityProjectsById (req, res, next) {
  University.deleteUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.deleteUniversityStateById = function deleteUniversityStateById (req, res, next) {
  University.deleteUniversityStateById(req.swagger.params, res, next);
};

module.exports.deleteUserUniversityById = function deleteUserUniversityById (req, res, next) {
  University.deleteUserUniversityById(req.swagger.params, res, next);
};

module.exports.modifyProjectUniversity = function modifyProjectUniversity (req, res, next) {
  University.modifyProjectUniversity(req.swagger.params, res, next);
};

module.exports.setProjectUniversity = function setProjectUniversity (req, res, next) {
  University.setProjectUniversity(req.swagger.params, res, next);
};

module.exports.setUniversityCityById = function setUniversityCityById (req, res, next) {
  University.setUniversityCityById(req.swagger.params, res, next);
};

module.exports.setUniversityGeolocationById = function setUniversityGeolocationById (req, res, next) {
  University.setUniversityGeolocationById(req.swagger.params, res, next);
};

module.exports.setUniversityGeolocationByIdForm = function setUniversityGeolocationByIdForm (req, res, next) {
  University.setUniversityGeolocationByIdForm(req.swagger.params, res, next);
};

module.exports.setUniversityImagesById = function setUniversityImagesById (req, res, next) {
  University.setUniversityImagesById(req.swagger.params, res, next);
};

module.exports.setUniversityNameById = function setUniversityNameById (req, res, next) {
  University.setUniversityNameById(req.swagger.params, res, next);
};

module.exports.setUniversityProjectById = function setUniversityProjectById (req, res, next) {
  University.setUniversityProjectById(req.swagger.params, res, next);
};

module.exports.setUniversityProjectsById = function setUniversityProjectsById (req, res, next) {
  University.setUniversityProjectsById(req.swagger.params, res, next);
};

module.exports.setUniversityStateById = function setUniversityStateById (req, res, next) {
  University.setUniversityStateById(req.swagger.params, res, next);
};

module.exports.settUserUniversityById = function settUserUniversityById (req, res, next) {
  University.settUserUniversityById(req.swagger.params, res, next);
};

module.exports.updateUniversityById = function updateUniversityById (req, res, next) {
  University.updateUniversityById(req.swagger.params, res, next);
};

module.exports.updateUniversityCityById = function updateUniversityCityById (req, res, next) {
  University.updateUniversityCityById(req.swagger.params, res, next);
};

module.exports.updateUniversityGeolocationById = function updateUniversityGeolocationById (req, res, next) {
  University.updateUniversityGeolocationById(req.swagger.params, res, next);
};

module.exports.updateUniversityGeolocationByIdForm = function updateUniversityGeolocationByIdForm (req, res, next) {
  University.updateUniversityGeolocationByIdForm(req.swagger.params, res, next);
};

module.exports.updateUniversityNameById = function updateUniversityNameById (req, res, next) {
  University.updateUniversityNameById(req.swagger.params, res, next);
};

module.exports.updateUniversityStateById = function updateUniversityStateById (req, res, next) {
  University.updateUniversityStateById(req.swagger.params, res, next);
};
