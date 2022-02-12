const express = require('express');
var router = express.Router();
const { getAllUsers, getUser } = require('./user_routes');
router.route('/').get(getAllUsers);

router.route('/:userId').get(getUser);

module.exports = router;
