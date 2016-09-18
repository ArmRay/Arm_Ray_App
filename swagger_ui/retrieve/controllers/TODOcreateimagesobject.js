'use strict';

var url = require('url');


var TODOcreateimagesobject = require('./TODOcreateimagesobjectService');


module.exports.getAllUserImages = function getAllUserImages (req, res, next) {
  TODOcreateimagesobject.getAllUserImages(req.swagger.params, res, next);
};
