const express = require('express');
var router = express.Router();
const { getAllProjects, getProject } = require('./projects_routes');
router.route('/').get(getAllProjects);

router.route('/:projectId').get(getProject);
module.exports = router;
