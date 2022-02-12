function destroy(req, res, next) {
  //remove user from database
}
function getAllJobs(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All Jobs');
}

function getJob(req, res, next) {
  const { jobId } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`jobId = ${jobId}`);
}

module.exports = { getAllJobs, getJob };
