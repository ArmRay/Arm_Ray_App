'use strict';

var url = require('url');


var Skill = require('./SkillService');


module.exports.addUserSkill = function addUserSkill (req, res, next) {
  Skill.addUserSkill(req.swagger.params, res, next);
};

module.exports.addUserSkillEndorsementById = function addUserSkillEndorsementById (req, res, next) {
  Skill.addUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.addUserSkillEndorsementsById = function addUserSkillEndorsementsById (req, res, next) {
  Skill.addUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.addUserSkills = function addUserSkills (req, res, next) {
  Skill.addUserSkills(req.swagger.params, res, next);
};

module.exports.createSkills = function createSkills (req, res, next) {
  Skill.createSkills(req.swagger.params, res, next);
};

module.exports.createUserSkill = function createUserSkill (req, res, next) {
  Skill.createUserSkill(req.swagger.params, res, next);
};

module.exports.deleteSkillDescriptionByIdForn = function deleteSkillDescriptionByIdForn (req, res, next) {
  Skill.deleteSkillDescriptionByIdForn(req.swagger.params, res, next);
};

module.exports.deleteSkillFromUserById = function deleteSkillFromUserById (req, res, next) {
  Skill.deleteSkillFromUserById(req.swagger.params, res, next);
};

module.exports.deleteSkillsFromUserById = function deleteSkillsFromUserById (req, res, next) {
  Skill.deleteSkillsFromUserById(req.swagger.params, res, next);
};

module.exports.deleteSkillwById = function deleteSkillwById (req, res, next) {
  Skill.deleteSkillwById(req.swagger.params, res, next);
};

module.exports.deleteUserSkillSkilById = function deleteUserSkillSkilById (req, res, next) {
  Skill.deleteUserSkillSkilById(req.swagger.params, res, next);
};

module.exports.deleteUserSkillUserById = function deleteUserSkillUserById (req, res, next) {
  Skill.deleteUserSkillUserById(req.swagger.params, res, next);
};

module.exports.deleteUserSkillwById = function deleteUserSkillwById (req, res, next) {
  Skill.deleteUserSkillwById(req.swagger.params, res, next);
};

module.exports.removeUserSkillEndorsementById = function removeUserSkillEndorsementById (req, res, next) {
  Skill.removeUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.removeUserSkillEndorsementsById = function removeUserSkillEndorsementsById (req, res, next) {
  Skill.removeUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.setSkillDescriptionById = function setSkillDescriptionById (req, res, next) {
  Skill.setSkillDescriptionById(req.swagger.params, res, next);
};

module.exports.setSkillDescriptionByIdForn = function setSkillDescriptionByIdForn (req, res, next) {
  Skill.setSkillDescriptionByIdForn(req.swagger.params, res, next);
};

module.exports.setUserSkill = function setUserSkill (req, res, next) {
  Skill.setUserSkill(req.swagger.params, res, next);
};

module.exports.setUserSkillEndorsementById = function setUserSkillEndorsementById (req, res, next) {
  Skill.setUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.setUserSkillEndorsementsById = function setUserSkillEndorsementsById (req, res, next) {
  Skill.setUserSkillEndorsementsById(req.swagger.params, res, next);
};

module.exports.setUserSkillSkillDescriptionById = function setUserSkillSkillDescriptionById (req, res, next) {
  Skill.setUserSkillSkillDescriptionById(req.swagger.params, res, next);
};

module.exports.setUserSkillUserById = function setUserSkillUserById (req, res, next) {
  Skill.setUserSkillUserById(req.swagger.params, res, next);
};

module.exports.setUserSkills = function setUserSkills (req, res, next) {
  Skill.setUserSkills(req.swagger.params, res, next);
};

module.exports.updateSkillById = function updateSkillById (req, res, next) {
  Skill.updateSkillById(req.swagger.params, res, next);
};

module.exports.updateSkillDescriptionById = function updateSkillDescriptionById (req, res, next) {
  Skill.updateSkillDescriptionById(req.swagger.params, res, next);
};

module.exports.updateSkillDescriptionByIdForm = function updateSkillDescriptionByIdForm (req, res, next) {
  Skill.updateSkillDescriptionByIdForm(req.swagger.params, res, next);
};

module.exports.updateUserSkillById = function updateUserSkillById (req, res, next) {
  Skill.updateUserSkillById(req.swagger.params, res, next);
};

module.exports.updateUserSkillSkill = function updateUserSkillSkill (req, res, next) {
  Skill.updateUserSkillSkill(req.swagger.params, res, next);
};

module.exports.updateUserSkillUserById = function updateUserSkillUserById (req, res, next) {
  Skill.updateUserSkillUserById(req.swagger.params, res, next);
};
