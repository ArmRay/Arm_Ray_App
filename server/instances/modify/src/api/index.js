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
app.use('/armray/api/0.1/rest/modify/Grant', require('./routes/Grant'));
app.use('/armray/api/0.1/rest/modify/Post', require('./routes/Post'));
app.use('/armray/api/0.1/rest/modify/Project', require('./routes/Project'));
app.use('/armray/api/0.1/rest/modify/Review', require('./routes/Review'));
app.use('/armray/api/0.1/rest/modify/Skill', require('./routes/Skill'));
app.use('/armray/api/0.1/rest/modify/University', require('./routes/University'));
app.use('/armray/api/0.1/rest/modify/User', require('./routes/User'));
app.use('/armray/api/0.1/rest/modify/UserSkill', require('./routes/UserSkill'));

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
