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
app.use('/armray/api/0.1/rest/Users', require('./routes/Users'));
app.use('/armray/api/0.1/rest/User', require('./routes/User'));
app.use('/armray/api/0.1/rest/Projects', require('./routes/Projects'));
app.use('/armray/api/0.1/rest/Project', require('./routes/Project'));
app.use('/armray/api/0.1/rest/Posts', require('./routes/Posts'));
app.use('/armray/api/0.1/rest/Post', require('./routes/Post'));
app.use('/armray/api/0.1/rest/Grants', require('./routes/Grants'));
app.use('/armray/api/0.1/rest/Grant', require('./routes/Grant'));
app.use('/armray/api/0.1/rest/Reviews', require('./routes/Reviews'));
app.use('/armray/api/0.1/rest/Review', require('./routes/Review'));
app.use('/armray/api/0.1/rest/Skills', require('./routes/Skills'));
app.use('/armray/api/0.1/rest/Skill', require('./routes/Skill'));
app.use('/armray/api/0.1/rest/UserSkills', require('./routes/UserSkills'));
app.use('/armray/api/0.1/rest/UserSkill', require('./routes/UserSkill'));
app.use('/armray/api/0.1/rest/Universities', require('./routes/Universities'));
app.use('/armray/api/0.1/rest/University', require('./routes/University'));

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
