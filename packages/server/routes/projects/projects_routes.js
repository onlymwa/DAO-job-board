function destroy(req, res, next) {
  //remove user from database
}
function getAllProjects(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All Projects');
}

function getProject(req, res, next) {
  const { projectId } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`projectId = ${projectId}`);
}

module.exports = { getAllProjects, getProject };
