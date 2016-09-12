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

module.exports.getUniversitiesById = function getUniversitiesById (req, res, next) {
  University.getUniversitiesById(req.swagger.params, res, next);
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

module.exports.getUsersByUniversityId = function getUsersByUniversityId (req, res, next) {
  University.getUsersByUniversityId(req.swagger.params, res, next);
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
