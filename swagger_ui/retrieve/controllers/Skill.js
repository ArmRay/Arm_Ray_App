'use strict';

var url = require('url');


var Skill = require('./SkillService');


module.exports.getAllUserSkills = function getAllUserSkills (req, res, next) {
  Skill.getAllUserSkills(req.swagger.params, res, next);
};

module.exports.getIsSkillBodyById = function getIsSkillBodyById (req, res, next) {
  Skill.getIsSkillBodyById(req.swagger.params, res, next);
};

module.exports.getIsSkillOnUser = function getIsSkillOnUser (req, res, next) {
  Skill.getIsSkillOnUser(req.swagger.params, res, next);
};

module.exports.getSkillBodyById = function getSkillBodyById (req, res, next) {
  Skill.getSkillBodyById(req.swagger.params, res, next);
};

module.exports.getSkillById = function getSkillById (req, res, next) {
  Skill.getSkillById(req.swagger.params, res, next);
};

module.exports.getSkillCreatedDateById = function getSkillCreatedDateById (req, res, next) {
  Skill.getSkillCreatedDateById(req.swagger.params, res, next);
};

module.exports.getSkillUpdatedDateById = function getSkillUpdatedDateById (req, res, next) {
  Skill.getSkillUpdatedDateById(req.swagger.params, res, next);
};

module.exports.getUSerSkillSkillById = function getUSerSkillSkillById (req, res, next) {
  Skill.getUSerSkillSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillById = function getUserSkillById (req, res, next) {
  Skill.getUserSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillCreatedDateById = function getUserSkillCreatedDateById (req, res, next) {
  Skill.getUserSkillCreatedDateById(req.swagger.params, res, next);
};

module.exports.getUserSkillEndorsementById = function getUserSkillEndorsementById (req, res, next) {
  Skill.getUserSkillEndorsementById(req.swagger.params, res, next);
};

module.exports.getUserSkillUpdatedDateById = function getUserSkillUpdatedDateById (req, res, next) {
  Skill.getUserSkillUpdatedDateById(req.swagger.params, res, next);
};

module.exports.getUserSkillUserById = function getUserSkillUserById (req, res, next) {
  Skill.getUserSkillUserById(req.swagger.params, res, next);
};
