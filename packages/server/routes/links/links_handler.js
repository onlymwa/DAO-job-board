const express = require('express');
var router = express.Router();
const { getAllLinks, getLink } = require('./links_routes');
router.route('/').get(getAllLinks);

router.route('/:linkId').get(getLink);
module.exports = router;
