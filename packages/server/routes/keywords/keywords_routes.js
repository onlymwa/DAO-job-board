function destroy(req, res, next) {
  //remove user from database
}
function getAllKeywords(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All Keywords');
}

function getKeyword(req, res, next) {
  const { keywordId } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`keywordId = ${keywordId}`);
}

module.exports = { getAllKeywords, getKeyword };
