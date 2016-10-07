'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _connectTimeout = require('connect-timeout');

var _connectTimeout2 = _interopRequireDefault(_connectTimeout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//IMPORT STATEMENTS
var app = (0, _express2.default)();

app.use((0, _connectTimeout2.default)(120000));
app.use(haltOnTimedout);
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

// APP USE STATEMENTS
app.use((0, _expressValidator2.default)({
  errorFormatter: function errorFormatter(param, msg, value) {
    var namespace = param.split('.'),
        root = namespace.shift(),
        formParam = root;

    while (namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param: formParam,
      msg: msg,
      value: value
    };
  }
}));

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

//Generic JS route, i.e. for route and etc
app.use('/js', _express2.default.static(__dirname));
// End of Generic JS route

app.use('/css', _express2.default.static(__dirname + '/../css'));
app.use('/controllers', _express2.default.static(__dirname + '/controllers'));
app.use('/services', _express2.default.static(__dirname + '/services'));
app.use('/views', _express2.default.static(__dirname + '/../views/templates'));
app.use('/directives', _express2.default.static(__dirname + '/directives'));
// BASE ROUTE
app.use(function (req, res) {
  res.sendFile('./index.html', { "root": "public/views/" });
});

// START THE SERVER
// =============================================================================

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Server running on port ' + port);