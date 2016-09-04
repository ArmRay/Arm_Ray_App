'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.createProject = function createProject (req, res, next) {
  User.createProject(req.swagger.params, res, next);
};

module.exports.createUser = function createUser (req, res, next) {
  User.createUser(req.swagger.params, res, next);
};

module.exports.updateProject = function updateProject (req, res, next) {
  User.updateProject(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser (req, res, next) {
  User.updateUser(req.swagger.params, res, next);
};
