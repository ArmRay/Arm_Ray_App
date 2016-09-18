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

module.exports.clearGrantType = function clearGrantType (req, res, next) {
  Grant.clearGrantType(req.swagger.params, res, next);
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

module.exports.modifyGrantAmount = function modifyGrantAmount (req, res, next) {
  Grant.modifyGrantAmount(req.swagger.params, res, next);
};

module.exports.modifyGrantAmountPath = function modifyGrantAmountPath (req, res, next) {
  Grant.modifyGrantAmountPath(req.swagger.params, res, next);
};

module.exports.modifyGrantDescription = function modifyGrantDescription (req, res, next) {
  Grant.modifyGrantDescription(req.swagger.params, res, next);
};

module.exports.modifyGrantType = function modifyGrantType (req, res, next) {
  Grant.modifyGrantType(req.swagger.params, res, next);
};

module.exports.modifyGrantTypePath = function modifyGrantTypePath (req, res, next) {
  Grant.modifyGrantTypePath(req.swagger.params, res, next);
};

module.exports.modifyProjectGrant = function modifyProjectGrant (req, res, next) {
  Grant.modifyProjectGrant(req.swagger.params, res, next);
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

module.exports.setGrantType = function setGrantType (req, res, next) {
  Grant.setGrantType(req.swagger.params, res, next);
};

module.exports.setGrantTypePath = function setGrantTypePath (req, res, next) {
  Grant.setGrantTypePath(req.swagger.params, res, next);
};

module.exports.setGrantUrls = function setGrantUrls (req, res, next) {
  Grant.setGrantUrls(req.swagger.params, res, next);
};

module.exports.setProjectGrant = function setProjectGrant (req, res, next) {
  Grant.setProjectGrant(req.swagger.params, res, next);
};

module.exports.updateGrantById = function updateGrantById (req, res, next) {
  Grant.updateGrantById(req.swagger.params, res, next);
};
