'use strict';

var url = require('url');


var Reviews = require('./ReviewsService');


module.exports.getReviewsByCreatedDate = function getReviewsByCreatedDate (req, res, next) {
  Reviews.getReviewsByCreatedDate(req.swagger.params, res, next);
};
