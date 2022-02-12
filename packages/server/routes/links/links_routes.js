function destroy(req, res, next) {
  //remove user from database
}
function getAllLinks(req, res, next) {
  //connect to database and query for everything in the users table.

  res.send('All Organizations');
}

function getLink(req, res, next) {
  const { linkId } = req.params;
  //query the database for the matching user. If none found add error
  res.send(`linkId = ${linkId}`);
}

module.exports = { getAllLinks, getLink };
