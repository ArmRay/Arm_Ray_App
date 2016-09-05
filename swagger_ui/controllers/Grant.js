'use strict';

var url = require('url');


var Grant = require('./GrantService');


module.exports.addGrantKeyword = function addGrantKeyword (req, res, next) {
  Grant.addGrantKeyword(req.swagger.params, res, next);
};

module.exports.addGrantKeywords = function addGrantKeywords (req, res, next) {
  Grant.addGrantKeywords(req.swagger.params, res, next);
};

module.exports.addGrantUrl = function addGrantUrl (req, res, next) {
  Grant.addGrantUrl(req.swagger.params, res, next);
};

module.exports.clearGrantAmount = function clearGrantAmount (req, res, next) {
  Grant.clearGrantAmount(req.swagger.params, res, next);
};

module.exports.clearGrantDescription = function clearGrantDescription (req, res, next) {
  Grant.clearGrantDescription(req.swagger.params, res, next);
};

module.exports.clearGrantKeywords = function clearGrantKeywords (req, res, next) {
  Grant.clearGrantKeywords(req.swagger.params, res, next);
};

module.exports.clearGrantUrls = function clearGrantUrls (req, res, next) {
  Grant.clearGrantUrls(req.swagger.params, res, next);
};

module.exports.createGrant = function createGrant (req, res, next) {
  Grant.createGrant(req.swagger.params, res, next);
};

module.exports.deleteGrantById = function deleteGrantById (req, res, next) {
  Grant.deleteGrantById(req.swagger.params, res, next);
};

module.exports.deleteGrantKeyword = function deleteGrantKeyword (req, res, next) {
  Grant.deleteGrantKeyword(req.swagger.params, res, next);
};

module.exports.deleteProjectGrant = function deleteProjectGrant (req, res, next) {
  Grant.deleteProjectGrant(req.swagger.params, res, next);
};

module.exports.deleteProjectGrantType = function deleteProjectGrantType (req, res, next) {
  Grant.deleteProjectGrantType(req.swagger.params, res, next);
};

module.exports.getGrantAmount = function getGrantAmount (req, res, next) {
  Grant.getGrantAmount(req.swagger.params, res, next);
};

module.exports.getGrantById = function getGrantById (req, res, next) {
  Grant.getGrantById(req.swagger.params, res, next);
};

module.exports.getGrantCreatedDate = function getGrantCreatedDate (req, res, next) {
  Grant.getGrantCreatedDate(req.swagger.params, res, next);
};

module.exports.getGrantDescription = function getGrantDescription (req, res, next) {
  Grant.getGrantDescription(req.swagger.params, res, next);
};

module.exports.getGrantKeywords = function getGrantKeywords (req, res, next) {
  Grant.getGrantKeywords(req.swagger.params, res, next);
};

module.exports.getGrantModifiedDate = function getGrantModifiedDate (req, res, next) {
  Grant.getGrantModifiedDate(req.swagger.params, res, next);
};

module.exports.getGrantUrl = function getGrantUrl (req, res, next) {
  Grant.getGrantUrl(req.swagger.params, res, next);
};

module.exports.getGrants = function getGrants (req, res, next) {
  Grant.getGrants(req.swagger.params, res, next);
};

module.exports.getGrantsByAmount = function getGrantsByAmount (req, res, next) {
  Grant.getGrantsByAmount(req.swagger.params, res, next);
};

module.exports.getGrantsByCreatedDate = function getGrantsByCreatedDate (req, res, next) {
  Grant.getGrantsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getGrantsByCreatedDateForm = function getGrantsByCreatedDateForm (req, res, next) {
  Grant.getGrantsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getGrantsByKeyword = function getGrantsByKeyword (req, res, next) {
  Grant.getGrantsByKeyword(req.swagger.params, res, next);
};

module.exports.getGrantsByKeywords = function getGrantsByKeywords (req, res, next) {
  Grant.getGrantsByKeywords(req.swagger.params, res, next);
};

module.exports.getGrantsByMaxAmount = function getGrantsByMaxAmount (req, res, next) {
  Grant.getGrantsByMaxAmount(req.swagger.params, res, next);
};

module.exports.getGrantsByMinAmount = function getGrantsByMinAmount (req, res, next) {
  Grant.getGrantsByMinAmount(req.swagger.params, res, next);
};

module.exports.getGrantsByModifiedDate = function getGrantsByModifiedDate (req, res, next) {
  Grant.getGrantsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getGrantsByModifiedDateForm = function getGrantsByModifiedDateForm (req, res, next) {
  Grant.getGrantsByModifiedDateForm(req.swagger.params, res, next);
};

module.exports.getProjectGrantById = function getProjectGrantById (req, res, next) {
  Grant.getProjectGrantById(req.swagger.params, res, next);
};

module.exports.getProjectGrantTypeById = function getProjectGrantTypeById (req, res, next) {
  Grant.getProjectGrantTypeById(req.swagger.params, res, next);
};

module.exports.getProjectsByGrantId = function getProjectsByGrantId (req, res, next) {
  Grant.getProjectsByGrantId(req.swagger.params, res, next);
};

module.exports.isGrantAmount = function isGrantAmount (req, res, next) {
  Grant.isGrantAmount(req.swagger.params, res, next);
};

module.exports.isGrantHaveKeyword = function isGrantHaveKeyword (req, res, next) {
  Grant.isGrantHaveKeyword(req.swagger.params, res, next);
};

module.exports.isGrantOnProject = function isGrantOnProject (req, res, next) {
  Grant.isGrantOnProject(req.swagger.params, res, next);
};

module.exports.isGrantTypeOnProject = function isGrantTypeOnProject (req, res, next) {
  Grant.isGrantTypeOnProject(req.swagger.params, res, next);
};

module.exports.modifyGrantAmount = function modifyGrantAmount (req, res, next) {
  Grant.modifyGrantAmount(req.swagger.params, res, next);
};

module.exports.modifyGrantAmountPath = function modifyGrantAmountPath (req, res, next) {
  Grant.modifyGrantAmountPath(req.swagger.params, res, next);
};

module.exports.modifyGrantDescription = function modifyGrantDescription (req, res, next) {
  Grant.modifyGrantDescription(req.swagger.params, res, next);
};

module.exports.modifyProjectGrant = function modifyProjectGrant (req, res, next) {
  Grant.modifyProjectGrant(req.swagger.params, res, next);
};

module.exports.modifyProjectGrantType = function modifyProjectGrantType (req, res, next) {
  Grant.modifyProjectGrantType(req.swagger.params, res, next);
};

module.exports.setGrantAmount = function setGrantAmount (req, res, next) {
  Grant.setGrantAmount(req.swagger.params, res, next);
};

module.exports.setGrantAmountPath = function setGrantAmountPath (req, res, next) {
  Grant.setGrantAmountPath(req.swagger.params, res, next);
};

module.exports.setGrantDescription = function setGrantDescription (req, res, next) {
  Grant.setGrantDescription(req.swagger.params, res, next);
};

module.exports.setGrantKeywordPath = function setGrantKeywordPath (req, res, next) {
  Grant.setGrantKeywordPath(req.swagger.params, res, next);
};

module.exports.setGrantKeywords = function setGrantKeywords (req, res, next) {
  Grant.setGrantKeywords(req.swagger.params, res, next);
};

module.exports.setGrantUrls = function setGrantUrls (req, res, next) {
  Grant.setGrantUrls(req.swagger.params, res, next);
};

module.exports.setProjectGrant = function setProjectGrant (req, res, next) {
  Grant.setProjectGrant(req.swagger.params, res, next);
};

module.exports.setProjectGrantType = function setProjectGrantType (req, res, next) {
  Grant.setProjectGrantType(req.swagger.params, res, next);
};

module.exports.updateGrantById = function updateGrantById (req, res, next) {
  Grant.updateGrantById(req.swagger.params, res, next);
};
