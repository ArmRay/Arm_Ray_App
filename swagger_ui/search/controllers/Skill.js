'use strict';

var url = require('url');


var Skill = require('./SkillService');


module.exports.getIsDescriptionOnSkills = function getIsDescriptionOnSkills (req, res, next) {
  Skill.getIsDescriptionOnSkills(req.swagger.params, res, next);
};

module.exports.getSkills = function getSkills (req, res, next) {
  Skill.getSkills(req.swagger.params, res, next);
};

module.exports.getSkillsByCreatedDate = function getSkillsByCreatedDate (req, res, next) {
  Skill.getSkillsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getSkillsByCreatedDateForm = function getSkillsByCreatedDateForm (req, res, next) {
  Skill.getSkillsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getSkillsByDescription = function getSkillsByDescription (req, res, next) {
  Skill.getSkillsByDescription(req.swagger.params, res, next);
};

module.exports.getSkillsByModifiedDate = function getSkillsByModifiedDate (req, res, next) {
  Skill.getSkillsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getSkillsByModifiedDateForm = function getSkillsByModifiedDateForm (req, res, next) {
  Skill.getSkillsByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillByUser = function getUserSkillByUser (req, res, next) {
  Skill.getUserSkillByUser(req.swagger.params, res, next);
};

module.exports.getUserSkills = function getUserSkills (req, res, next) {
  Skill.getUserSkills(req.swagger.params, res, next);
};

module.exports.getUserSkillsByCreatedDate = function getUserSkillsByCreatedDate (req, res, next) {
  Skill.getUserSkillsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getUserSkillsByCreatedDateForm = function getUserSkillsByCreatedDateForm (req, res, next) {
  Skill.getUserSkillsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillsByModifiedDate = function getUserSkillsByModifiedDate (req, res, next) {
  Skill.getUserSkillsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getUserSkillsByModifiedDateForm = function getUserSkillsByModifiedDateForm (req, res, next) {
  Skill.getUserSkillsByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getUserSkillsbyEndorsementId = function getUserSkillsbyEndorsementId (req, res, next) {
  Skill.getUserSkillsbyEndorsementId(req.swagger.params, res, next);
};

module.exports.getUserSkillsbyEndorsementIds = function getUserSkillsbyEndorsementIds (req, res, next) {
  Skill.getUserSkillsbyEndorsementIds(req.swagger.params, res, next);
};

module.exports.getUserSkillsbySkillId = function getUserSkillsbySkillId (req, res, next) {
  Skill.getUserSkillsbySkillId(req.swagger.params, res, next);
};

module.exports.getUserSkillsbySkillIds = function getUserSkillsbySkillIds (req, res, next) {
  Skill.getUserSkillsbySkillIds(req.swagger.params, res, next);
};
