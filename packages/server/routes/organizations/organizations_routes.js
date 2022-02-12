function destroy(req, res, next) {
  //remove user from database
}
function getAllOrganizations(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All Organizations');
}

function getOrganization(req, res, next) {
  const { organizationId } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`organizationId = ${organizationId}`);
}

module.exports = { getAllOrganizations, getOrganization };
