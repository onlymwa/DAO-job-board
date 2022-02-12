const express = require('express');
const usersHandler = require('./routes/users/user_handler');
const userKeywordHandler = require('./routes/user_keyword/user_keyword_handler');
const projectsHandler = require('./routes/projects/projects_handler');
const jobsHandler = require('./routes/jobs/jobs_handler');
const linksHandler = require('./routes/links/links_handler');
const keywordsHandler = require('./routes/keywords/keywords_handler');
const organizationsHandler = require('./routes/organizations/organizations_handler');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use('/users', usersHandler);

app.use('/jobs', jobsHandler);

app.use('/keywords', keywordsHandler);

app.use('/links', linksHandler);

app.use('/organizations', organizationsHandler);

app.use('/projects', projectsHandler);

app.use('/user_keyword', userKeywordHandler);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
