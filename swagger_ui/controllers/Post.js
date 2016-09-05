'use strict';

var url = require('url');


var Post = require('./PostService');


module.exports.addPostKeywordById = function addPostKeywordById (req, res, next) {
  Post.addPostKeywordById(req.swagger.params, res, next);
};

module.exports.addPostKeywordByIdPost = function addPostKeywordByIdPost (req, res, next) {
  Post.addPostKeywordByIdPost(req.swagger.params, res, next);
};

module.exports.addPostTagsByIdPost = function addPostTagsByIdPost (req, res, next) {
  Post.addPostTagsByIdPost(req.swagger.params, res, next);
};

module.exports.addProjectPost = function addProjectPost (req, res, next) {
  Post.addProjectPost(req.swagger.params, res, next);
};

module.exports.addProjectPosts = function addProjectPosts (req, res, next) {
  Post.addProjectPosts(req.swagger.params, res, next);
};

module.exports.createPost = function createPost (req, res, next) {
  Post.createPost(req.swagger.params, res, next);
};

module.exports.deletePosTitleById = function deletePosTitleById (req, res, next) {
  Post.deletePosTitleById(req.swagger.params, res, next);
};

module.exports.deletePostAuthorById = function deletePostAuthorById (req, res, next) {
  Post.deletePostAuthorById(req.swagger.params, res, next);
};

module.exports.deletePostById = function deletePostById (req, res, next) {
  Post.deletePostById(req.swagger.params, res, next);
};

module.exports.deletePostKeywordById = function deletePostKeywordById (req, res, next) {
  Post.deletePostKeywordById(req.swagger.params, res, next);
};

module.exports.deletePostKeywordsById = function deletePostKeywordsById (req, res, next) {
  Post.deletePostKeywordsById(req.swagger.params, res, next);
};

module.exports.deletePostTagsById = function deletePostTagsById (req, res, next) {
  Post.deletePostTagsById(req.swagger.params, res, next);
};

module.exports.deletePostTextById = function deletePostTextById (req, res, next) {
  Post.deletePostTextById(req.swagger.params, res, next);
};

module.exports.deleteProjectPost = function deleteProjectPost (req, res, next) {
  Post.deleteProjectPost(req.swagger.params, res, next);
};

module.exports.deleteProjectPosts = function deleteProjectPosts (req, res, next) {
  Post.deleteProjectPosts(req.swagger.params, res, next);
};

module.exports.deleteProjectTagsById = function deleteProjectTagsById (req, res, next) {
  Post.deleteProjectTagsById(req.swagger.params, res, next);
};

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

module.exports.isKeywordOnPost = function isKeywordOnPost (req, res, next) {
  Post.isKeywordOnPost(req.swagger.params, res, next);
};

module.exports.isPostOnProject = function isPostOnProject (req, res, next) {
  Post.isPostOnProject(req.swagger.params, res, next);
};

module.exports.isPostPrivateById = function isPostPrivateById (req, res, next) {
  Post.isPostPrivateById(req.swagger.params, res, next);
};

module.exports.replacePostKeywordsById = function replacePostKeywordsById (req, res, next) {
  Post.replacePostKeywordsById(req.swagger.params, res, next);
};

module.exports.replacePostTagsById = function replacePostTagsById (req, res, next) {
  Post.replacePostTagsById(req.swagger.params, res, next);
};

module.exports.setAllProjectPosts = function setAllProjectPosts (req, res, next) {
  Post.setAllProjectPosts(req.swagger.params, res, next);
};

module.exports.updatePostAuthorById = function updatePostAuthorById (req, res, next) {
  Post.updatePostAuthorById(req.swagger.params, res, next);
};

module.exports.updatePostAuthorByIdPost = function updatePostAuthorByIdPost (req, res, next) {
  Post.updatePostAuthorByIdPost(req.swagger.params, res, next);
};

module.exports.updatePostPrivacyById = function updatePostPrivacyById (req, res, next) {
  Post.updatePostPrivacyById(req.swagger.params, res, next);
};

module.exports.updatePostPrivacyByIdPost = function updatePostPrivacyByIdPost (req, res, next) {
  Post.updatePostPrivacyByIdPost(req.swagger.params, res, next);
};

module.exports.updatePostTagsById = function updatePostTagsById (req, res, next) {
  Post.updatePostTagsById(req.swagger.params, res, next);
};

module.exports.updatePostTextById = function updatePostTextById (req, res, next) {
  Post.updatePostTextById(req.swagger.params, res, next);
};

module.exports.updatePostTextByIdPost = function updatePostTextByIdPost (req, res, next) {
  Post.updatePostTextByIdPost(req.swagger.params, res, next);
};

module.exports.updatePostTitleById = function updatePostTitleById (req, res, next) {
  Post.updatePostTitleById(req.swagger.params, res, next);
};

module.exports.updatePostTitleByIdPost = function updatePostTitleByIdPost (req, res, next) {
  Post.updatePostTitleByIdPost(req.swagger.params, res, next);
};

module.exports.updatePosttById = function updatePosttById (req, res, next) {
  Post.updatePosttById(req.swagger.params, res, next);
};

module.exports.updateProjectKeywordsById = function updateProjectKeywordsById (req, res, next) {
  Post.updateProjectKeywordsById(req.swagger.params, res, next);
};
