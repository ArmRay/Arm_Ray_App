'use strict';

var url = require('url');


var Grant = require('./GrantService');


module.exports.getGrants = function getGrants (req, res, next) {
  Grant.getGrants(req.swagger.params, res, next);
};

module.exports.getGrantsByAmount = function getGrantsByAmount (req, res, next) {
  Grant.getGrantsByAmount(req.swagger.params, res, next);
};

module.exports.getGrantsByAmountRange = function getGrantsByAmountRange (req, res, next) {
  Grant.getGrantsByAmountRange(req.swagger.params, res, next);
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

module.exports.getGrantsByType = function getGrantsByType (req, res, next) {
  Grant.getGrantsByType(req.swagger.params, res, next);
};

module.exports.getGrantsByTypeForm = function getGrantsByTypeForm (req, res, next) {
  Grant.getGrantsByTypeForm(req.swagger.params, res, next);
};

module.exports.getProjectsByGrantId = function getProjectsByGrantId (req, res, next) {
  Grant.getProjectsByGrantId(req.swagger.params, res, next);
};
