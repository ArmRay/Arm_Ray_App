'use strict';

var url = require('url');


var Post = require('./PostService');


module.exports.getAllProjectPosts = function getAllProjectPosts (req, res, next) {
  Post.getAllProjectPosts(req.swagger.params, res, next);
};

module.exports.getIsUserTagOnProject = function getIsUserTagOnProject (req, res, next) {
  Post.getIsUserTagOnProject(req.swagger.params, res, next);
};

module.exports.getPostAuthorById = function getPostAuthorById (req, res, next) {
  Post.getPostAuthorById(req.swagger.params, res, next);
};

module.exports.getPostById = function getPostById (req, res, next) {
  Post.getPostById(req.swagger.params, res, next);
};

module.exports.getPostKeywordsById = function getPostKeywordsById (req, res, next) {
  Post.getPostKeywordsById(req.swagger.params, res, next);
};

module.exports.getPostTagsById = function getPostTagsById (req, res, next) {
  Post.getPostTagsById(req.swagger.params, res, next);
};

module.exports.getPostTextById = function getPostTextById (req, res, next) {
  Post.getPostTextById(req.swagger.params, res, next);
};

module.exports.getPostTitleById = function getPostTitleById (req, res, next) {
  Post.getPostTitleById(req.swagger.params, res, next);
};

module.exports.isKeywordOnPost = function isKeywordOnPost (req, res, next) {
  Post.isKeywordOnPost(req.swagger.params, res, next);
};

module.exports.isPostOnProject = function isPostOnProject (req, res, next) {
  Post.isPostOnProject(req.swagger.params, res, next);
};

module.exports.isPostPrivateById = function isPostPrivateById (req, res, next) {
  Post.isPostPrivateById(req.swagger.params, res, next);
};
