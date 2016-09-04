'use strict';

var url = require('url');


var Projects = require('./ProjectsService');


module.exports.getProjects = function getProjects (req, res, next) {
  Projects.getProjects(req.swagger.params, res, next);
};
