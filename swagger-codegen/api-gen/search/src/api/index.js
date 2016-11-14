import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import config from '../lib/config';
import logger from '../lib/logger';

const log = logger(config.logger);
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/*
 * Routes
 */
app.use('/armray/api/0.1/rest/search/Users', require('./routes/Users'));
app.use('/armray/api/0.1/rest/search/Projects', require('./routes/Projects'));
app.use('/armray/api/0.1/rest/search/Posts', require('./routes/Posts'));
app.use('/armray/api/0.1/rest/search/Grants', require('./routes/Grants'));
app.use('/armray/api/0.1/rest/search/Reviews', require('./routes/Reviews'));
app.use('/armray/api/0.1/rest/search/Skills', require('./routes/Skills'));
app.use('/armray/api/0.1/rest/search/UserSkills', require('./routes/UserSkills'));
app.use('/armray/api/0.1/rest/search/Universities', require('./routes/Universities'));

// catch 404
app.use((req, res, next) => {
  log.error(`Error 404 on ${req.url}.`);
  res.status(404).send({ status: 404, error: 'Not found' });
});

// catch errors
app.use((err, req, res, next) => {
  const status = err.status || 500;
  log.error(`Error ${status} (${err.message}) on ${req.method} ${req.url} with payload ${req.body}.`);
  res.status(status).send({ status, error: 'Server error' });
});

module.exports = app;
