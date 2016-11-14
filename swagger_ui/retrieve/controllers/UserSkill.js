'use strict';

var url = require('url');


var UserSkill = require('./UserSkillService');


module.exports.getUSerSkillSkillById = function getUSerSkillSkillById (req, res, next) {
  UserSkill.getUSerSkillSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillById = function getUserSkillById (req, res, next) {
  UserSkill.getUserSkillById(req.swagger.params, res, next);
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
