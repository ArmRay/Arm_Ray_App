'use strict';

var url = require('url');


var Review = require('./ReviewService');


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
