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

module.exports.getAllUserSkills = function getAllUserSkills (req, res, next) {
  Skill.getAllUserSkills(req.swagger.params, res, next);
};

module.exports.getIsDescriptionOnSkills = function getIsDescriptionOnSkills (req, res, next) {
  Skill.getIsDescriptionOnSkills(req.swagger.params, res, next);
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

module.exports.getUSerSkillSkillById = function getUSerSkillSkillById (req, res, next) {
  Skill.getUSerSkillSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillById = function getUserSkillById (req, res, next) {
  Skill.getUserSkillById(req.swagger.params, res, next);
};

module.exports.getUserSkillByUser = function getUserSkillByUser (req, res, next) {
  Skill.getUserSkillByUser(req.swagger.params, res, next);
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
