'use strict';

var url = require('url');


var UserSkill = require('./UserSkillService');


module.exports.addUserSkillEndorsementById = function addUserSkillEndorsementById (req, res, next) {
  UserSkill.addUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.addUserSkillEndorsementsById = function addUserSkillEndorsementsById (req, res, next) {
  UserSkill.addUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.createUserSkill = function createUserSkill (req, res, next) {
  UserSkill.createUserSkill(req.swagger.params, res, next);
};

module.exports.deleteUserSkillSkilById = function deleteUserSkillSkilById (req, res, next) {
  UserSkill.deleteUserSkillSkilById(req.swagger.params, res, next);
};

module.exports.deleteUserSkillwById = function deleteUserSkillwById (req, res, next) {
  UserSkill.deleteUserSkillwById(req.swagger.params, res, next);
};

module.exports.getUSerSkillSkillById = function getUSerSkillSkillById (req, res, next) {
  UserSkill.getUSerSkillSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillById = function getUserSkillById (req, res, next) {
  UserSkill.getUserSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillByUser = function getUserSkillByUser (req, res, next) {
  UserSkill.getUserSkillByUser(req.swagger.params, res, next);
};

module.exports.getUserSkillCreatedDateById = function getUserSkillCreatedDateById (req, res, next) {
  UserSkill.getUserSkillCreatedDateById(req.swagger.params, res, next);
};

module.exports.getUserSkillEndorsementById = function getUserSkillEndorsementById (req, res, next) {
  UserSkill.getUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.getUserSkillUpdatedDateById = function getUserSkillUpdatedDateById (req, res, next) {
  UserSkill.getUserSkillUpdatedDateById(req.swagger.params, res, next);
};

module.exports.getUserSkillUserById = function getUserSkillUserById (req, res, next) {
  UserSkill.getUserSkillUserById(req.swagger.params, res, next);
};

module.exports.getUserSkills = function getUserSkills (req, res, next) {
  UserSkill.getUserSkills(req.swagger.params, res, next);
};

module.exports.getUserSkillsByCreatedDate = function getUserSkillsByCreatedDate (req, res, next) {
  UserSkill.getUserSkillsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getUserSkillsByCreatedDateForm = function getUserSkillsByCreatedDateForm (req, res, next) {
  UserSkill.getUserSkillsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillsByModifiedDate = function getUserSkillsByModifiedDate (req, res, next) {
  UserSkill.getUserSkillsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getUserSkillsByModifiedDateForm = function getUserSkillsByModifiedDateForm (req, res, next) {
  UserSkill.getUserSkillsByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillsbyEndorsementId = function getUserSkillsbyEndorsementId (req, res, next) {
  UserSkill.getUserSkillsbyEndorsementId(req.swagger.params, res, next);
};

module.exports.getUserSkillsbyEndorsementIds = function getUserSkillsbyEndorsementIds (req, res, next) {
  UserSkill.getUserSkillsbyEndorsementIds(req.swagger.params, res, next);
};

module.exports.getUserSkillsbySkillId = function getUserSkillsbySkillId (req, res, next) {
  UserSkill.getUserSkillsbySkillId(req.swagger.params, res, next);
};

module.exports.getUserSkillsbySkillIds = function getUserSkillsbySkillIds (req, res, next) {
  UserSkill.getUserSkillsbySkillIds(req.swagger.params, res, next);
};

module.exports.removeUserSkillEndorsementById = function removeUserSkillEndorsementById (req, res, next) {
  UserSkill.removeUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.removeUserSkillEndorsementsById = function removeUserSkillEndorsementsById (req, res, next) {
  UserSkill.removeUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.setUserSkillEndorsementById = function setUserSkillEndorsementById (req, res, next) {
  UserSkill.setUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.setUserSkillEndorsementsById = function setUserSkillEndorsementsById (req, res, next) {
  UserSkill.setUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.setUserSkillSkillDescriptionById = function setUserSkillSkillDescriptionById (req, res, next) {
  UserSkill.setUserSkillSkillDescriptionById(req.swagger.params, res, next);
};

module.exports.setUserSkillUserById = function setUserSkillUserById (req, res, next) {
  UserSkill.setUserSkillUserById(req.swagger.params, res, next);
};

module.exports.updateUserSkillById = function updateUserSkillById (req, res, next) {
  UserSkill.updateUserSkillById(req.swagger.params, res, next);
};

module.exports.updateUserSkillSkill = function updateUserSkillSkill (req, res, next) {
  UserSkill.updateUserSkillSkill(req.swagger.params, res, next);
};

module.exports.updateUserSkillUserById = function updateUserSkillUserById (req, res, next) {
  UserSkill.updateUserSkillUserById(req.swagger.params, res, next);
};
