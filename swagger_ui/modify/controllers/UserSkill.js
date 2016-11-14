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
