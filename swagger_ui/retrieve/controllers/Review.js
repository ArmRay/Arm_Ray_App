'use strict';

var url = require('url');


var Review = require('./ReviewService');


module.exports.getAllProjectReviews = function getAllProjectReviews (req, res, next) {
  Review.getAllProjectReviews(req.swagger.params, res, next);
};

module.exports.getAllUserReviewById = function getAllUserReviewById (req, res, next) {
  Review.getAllUserReviewById(req.swagger.params, res, next);
};

module.exports.getReviewBodyById = function getReviewBodyById (req, res, next) {
  Review.getReviewBodyById(req.swagger.params, res, next);
};

module.exports.getReviewById = function getReviewById (req, res, next) {
  Review.getReviewById(req.swagger.params, res, next);
};

module.exports.getReviewCreatedDateById = function getReviewCreatedDateById (req, res, next) {
  Review.getReviewCreatedDateById(req.swagger.params, res, next);
};

module.exports.getReviewRatingById = function getReviewRatingById (req, res, next) {
  Review.getReviewRatingById(req.swagger.params, res, next);
};

module.exports.getReviewReviewerById = function getReviewReviewerById (req, res, next) {
  Review.getReviewReviewerById(req.swagger.params, res, next);
};

module.exports.getReviewUpdatedDateById = function getReviewUpdatedDateById (req, res, next) {
  Review.getReviewUpdatedDateById(req.swagger.params, res, next);
};

module.exports.getReviewUrlById = function getReviewUrlById (req, res, next) {
  Review.getReviewUrlById(req.swagger.params, res, next);
};

module.exports.isReviewOnOProject = function isReviewOnOProject (req, res, next) {
  Review.isReviewOnOProject(req.swagger.params, res, next);
};

module.exports.isReviewOnUserById = function isReviewOnUserById (req, res, next) {
  Review.isReviewOnUserById(req.swagger.params, res, next);
};

module.exports.isReviewRating = function isReviewRating (req, res, next) {
  Review.isReviewRating(req.swagger.params, res, next);
};

module.exports.isUserReviewReviewer = function isUserReviewReviewer (req, res, next) {
  Review.isUserReviewReviewer(req.swagger.params, res, next);
};
