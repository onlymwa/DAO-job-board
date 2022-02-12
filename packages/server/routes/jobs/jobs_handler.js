const express = require('express');
var router = express.Router();
const { getAllJobs, getJob } = require('./jobs_routes');
router.route('/').get(getAllJobs);

router.route('/:jobId').get(getJob);
module.exports = router;
