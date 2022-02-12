const express = require('express');
var router = express.Router();
const { getAllKeywords, getKeyword } = require('./keywords_routes');
router.route('/').get(getAllKeywords);

router.route('/:keywordId').get(getKeyword);
module.exports = router;
