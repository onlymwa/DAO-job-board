function destroy(req, res, next) {
  //remove user from database
}
function getAllUserKeywords(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All User Keywords');
}

function getUserKeyword(req, res, next) {
  const { userKeyword } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`User Keyword = ${userKeyword}`);
}

module.exports = { getAllUserKeywords, getUserKeyword };
