'use strict';

var url = require('url');


var REFACTORTODOmovegrantstufftograntobject = require('./REFACTORTODOmovegrantstufftograntobjectService');


module.exports.deleteProjectGrantType = function deleteProjectGrantType (req, res, next) {
  REFACTORTODOmovegrantstufftograntobject.deleteProjectGrantType(req.swagger.params, res, next);
};

module.exports.getProjectGrantTypeById = function getProjectGrantTypeById (req, res, next) {
  REFACTORTODOmovegrantstufftograntobject.getProjectGrantTypeById(req.swagger.params, res, next);
};

module.exports.isGrantTypeOnProject = function isGrantTypeOnProject (req, res, next) {
  REFACTORTODOmovegrantstufftograntobject.isGrantTypeOnProject(req.swagger.params, res, next);
};

module.exports.modifyProjectGrantType = function modifyProjectGrantType (req, res, next) {
  REFACTORTODOmovegrantstufftograntobject.modifyProjectGrantType(req.swagger.params, res, next);
};

module.exports.setProjectGrantType = function setProjectGrantType (req, res, next) {
  REFACTORTODOmovegrantstufftograntobject.setProjectGrantType(req.swagger.params, res, next);
};
