'use strict';

var url = require('url');


var Grant = require('./GrantService');


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

module.exports.getGrantType = function getGrantType (req, res, next) {
  Grant.getGrantType(req.swagger.params, res, next);
};

module.exports.getGrantUrl = function getGrantUrl (req, res, next) {
  Grant.getGrantUrl(req.swagger.params, res, next);
};

module.exports.getProjectGrantById = function getProjectGrantById (req, res, next) {
  Grant.getProjectGrantById(req.swagger.params, res, next);
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

module.exports.isGrantType = function isGrantType (req, res, next) {
  Grant.isGrantType(req.swagger.params, res, next);
};
