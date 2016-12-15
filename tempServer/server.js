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

var db = require('./db');

var api = require('./apiRoutes');

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

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
};

app.use(allowCrossDomain);



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

app.use(_bodyParser2.default.urlencoded({ extended:true }));
app.use(_bodyParser2.default.json());

//Generic JS route, i.e. for route and etc
app.use('/js', _express2.default.static('../public/javascript'));
// End of Generic JS route
app.use('/branding', _express2.default.static('../public/assets/images'));
app.use('/css', _express2.default.static('../public/css'));
app.use('/controllers', _express2.default.static('../public/contrsollers'));
app.use('/factories', _express2.default.static('../public/factories'));
app.use('/services', _express2.default.static('../public/services'));
app.use('/views', _express2.default.static('../public/views/templates'));
app.use('/directives', _express2.default.static('../public/directives'));

app.use('/api',api);
// BASE ROUTE

app.all('/*', function (req, res) {
  res.sendFile('./index.html', { "root": "../public/views/" });
})

// START THE SERVER
// =============================================================================

var port = process.env.PORT || 8080;
app.listen(port);

console.log('Server running on port ' + port);