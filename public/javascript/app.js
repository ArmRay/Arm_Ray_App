//IMPORT STATEMENTS
import express from 'express';
import validator from 'express-validator';
import body-parser from 'body-parser';
import session from 'express-session';
import path from 'path';
import timeout from 'connect-timeout';

let app = express();

app.use(timeout(120000));
app.use(haltOnTimedout);
function haltOnTimedout(req, res, next){
  if (!req.timedout) next();
}


process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});





// APP USE STATEMENTS
app.use(validator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Generic JS route, i.e. for route and etc
app.use('/js', express.static(__dirname+'/public/javascript'));
// End of Generic JS route

app.use('/css', express.static(__dirname+'/public/css'));
app.use('/controllers', express.static(__dirname+'/public/javascript/controllers'));
app.use('/services', express.statuc(__dirname+'/public/javascript/services'));







// BASIC ROUTE STATEMENTS FOR SERVING ANGULAR INDEXES
app.get('/', function (req, res) {
  res.sendFile('./index.html', {"root": __dirname});
});









// START THE SERVER
// =============================================================================

let port = process.env.PORT || 8080;
app.listen(port);