const express = require('express');
var router = express.Router();
const {
  getAllOrganizations,
  getOrganization,
} = require('./organizations_routes');
router.route('/').get(getAllOrganizations);

router.route('/:organizationId').get(getOrganization);
module.exports = router;
