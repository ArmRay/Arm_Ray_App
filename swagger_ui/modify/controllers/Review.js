'use strict';

var url = require('url');


var Review = require('./ReviewService');


module.exports.addProjectReview = function addProjectReview (req, res, next) {
  Review.addProjectReview(req.swagger.params, res, next);
};

module.exports.addProjectReviews = function addProjectReviews (req, res, next) {
  Review.addProjectReviews(req.swagger.params, res, next);
};

module.exports.deleteAllUserReviewById = function deleteAllUserReviewById (req, res, next) {
  Review.deleteAllUserReviewById(req.swagger.params, res, next);
};

module.exports.deleteProjectReview = function deleteProjectReview (req, res, next) {
  Review.deleteProjectReview(req.swagger.params, res, next);
};

module.exports.deleteProjectReviews = function deleteProjectReviews (req, res, next) {
  Review.deleteProjectReviews(req.swagger.params, res, next);
};

module.exports.deleteReviewBodyById = function deleteReviewBodyById (req, res, next) {
  Review.deleteReviewBodyById(req.swagger.params, res, next);
};

module.exports.deleteReviewById = function deleteReviewById (req, res, next) {
  Review.deleteReviewById(req.swagger.params, res, next);
};

module.exports.deleteReviewRating = function deleteReviewRating (req, res, next) {
  Review.deleteReviewRating(req.swagger.params, res, next);
};

module.exports.deleteReviewReviewer = function deleteReviewReviewer (req, res, next) {
  Review.deleteReviewReviewer(req.swagger.params, res, next);
};

module.exports.deleteReviewReviewerById = function deleteReviewReviewerById (req, res, next) {
  Review.deleteReviewReviewerById(req.swagger.params, res, next);
};

module.exports.deleteReviewUrl = function deleteReviewUrl (req, res, next) {
  Review.deleteReviewUrl(req.swagger.params, res, next);
};

module.exports.deleteUserFirstName = function deleteUserFirstName (req, res, next) {
  Review.deleteUserFirstName(req.swagger.params, res, next);
};

module.exports.deleteUserReviewById = function deleteUserReviewById (req, res, next) {
  Review.deleteUserReviewById(req.swagger.params, res, next);
};

module.exports.setAllProjectReviews = function setAllProjectReviews (req, res, next) {
  Review.setAllProjectReviews(req.swagger.params, res, next);
};

module.exports.setReviewBodyById = function setReviewBodyById (req, res, next) {
  Review.setReviewBodyById(req.swagger.params, res, next);
};

module.exports.setReviewRating = function setReviewRating (req, res, next) {
  Review.setReviewRating(req.swagger.params, res, next);
};

module.exports.setReviewReviewerById = function setReviewReviewerById (req, res, next) {
  Review.setReviewReviewerById(req.swagger.params, res, next);
};

module.exports.setReviewUrl = function setReviewUrl (req, res, next) {
  Review.setReviewUrl(req.swagger.params, res, next);
};

module.exports.setUserReviewById = function setUserReviewById (req, res, next) {
  Review.setUserReviewById(req.swagger.params, res, next);
};

module.exports.updateReviewBodyById = function updateReviewBodyById (req, res, next) {
  Review.updateReviewBodyById(req.swagger.params, res, next);
};

module.exports.updateReviewById = function updateReviewById (req, res, next) {
  Review.updateReviewById(req.swagger.params, res, next);
};

module.exports.updateReviewRating = function updateReviewRating (req, res, next) {
  Review.updateReviewRating(req.swagger.params, res, next);
};

module.exports.updateReviewReviewerById = function updateReviewReviewerById (req, res, next) {
  Review.updateReviewReviewerById(req.swagger.params, res, next);
};

module.exports.updateReviewUrl = function updateReviewUrl (req, res, next) {
  Review.updateReviewUrl(req.swagger.params, res, next);
};
