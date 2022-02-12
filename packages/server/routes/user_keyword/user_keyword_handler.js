const express = require('express');
var router = express.Router();
const { getAllUserKeywords, getUserKeyword } = require('./user_keyword_routes');
router.route('/').get(getAllUserKeywords);

router.route('/:userKeyword').get(getUserKeyword);
module.exports = router;
