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

module.exports.getReviewsByCreatedDate = function getReviewsByCreatedDate (req, res, next) {
  Review.getReviewsByCreatedDate(req.swagger.params, res, next);
};

module.exports.getReviewsByCreatedDateForm = function getReviewsByCreatedDateForm (req, res, next) {
  Review.getReviewsByCreatedDateForm(req.swagger.params, res, next);
};

module.exports.getReviewsByMinRating = function getReviewsByMinRating (req, res, next) {
  Review.getReviewsByMinRating(req.swagger.params, res, next);
};

module.exports.getReviewsByModifiedDate = function getReviewsByModifiedDate (req, res, next) {
  Review.getReviewsByModifiedDate(req.swagger.params, res, next);
};

module.exports.getReviewsByRating = function getReviewsByRating (req, res, next) {
  Review.getReviewsByRating(req.swagger.params, res, next);
};

module.exports.getReviewsByReviewer = function getReviewsByReviewer (req, res, next) {
  Review.getReviewsByReviewer(req.swagger.params, res, next);
};

module.exports.getReviewss = function getReviewss (req, res, next) {
  Review.getReviewss(req.swagger.params, res, next);
};

module.exports.getReviewssByModifiedDateForm = function getReviewssByModifiedDateForm (req, res, next) {
  Review.getReviewssByModifiedDateForm(req.swagger.params, res, next);
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
