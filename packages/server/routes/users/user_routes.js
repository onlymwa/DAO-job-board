function destroy(req, res, next) {
  //remove user from database
}
function getAllUsers(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All Users');
}

function getUser(req, res, next) {
  const { userId } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`UserId = ${userId}`);
}

module.exports = { getAllUsers: getAllUsers, getUser: getUser };
