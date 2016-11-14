'use strict';

var url = require('url');


var UserSkill = require('./UserSkillService');


module.exports.getUserSkillByUser = function getUserSkillByUser (req, res, next) {
  UserSkill.getUserSkillByUser(req.swagger.params, res, next);
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
