'use strict';

var url = require('url');


var Post = require('./PostService');


module.exports.getPosts = function getPosts (req, res, next) {
  Post.getPosts(req.swagger.params, res, next);
};

module.exports.getPostsByAuthorId = function getPostsByAuthorId (req, res, next) {
  Post.getPostsByAuthorId(req.swagger.params, res, next);
};

module.exports.getPostsByCreatedDate = function getPostsByCreatedDate (req, res, next) {
  Post.getPostsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getPostsByCreatedDateForm = function getPostsByCreatedDateForm (req, res, next) {
  Post.getPostsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getPostsByKeyword = function getPostsByKeyword (req, res, next) {
  Post.getPostsByKeyword(req.swagger.params, res, next);
};

module.exports.getPostsByKeywords = function getPostsByKeywords (req, res, next) {
  Post.getPostsByKeywords(req.swagger.params, res, next);
};

module.exports.getPostsByModifiedDate = function getPostsByModifiedDate (req, res, next) {
  Post.getPostsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getPostsByModifiedDateForm = function getPostsByModifiedDateForm (req, res, next) {
  Post.getPostsByModifiedDateForm(req.swagger.params, res, next);
};
