'use strict';

var url = require('url');


var Users = require('./UsersService');


module.exports.getUsers = function getUsers (req, res, next) {
  Users.getUsers(req.swagger.params, res, next);
};
