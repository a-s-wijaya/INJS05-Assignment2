const { verifyToken } = require("../helpers/jwt");
const users = require("../data/users.json");

function verifyUser(username, password, users) {
  const user = users.find(
    (u) => u.username === username && u.password === password
  );
  return user;
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  verifyToken(token, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    const foundUser = users.find(
      (u) => u.username === user.username && u.password === user.password
    );
    if (!foundUser) {
      return res.sendStatus(403);
    }
    req.user = foundUser;
    next();
  });
}

module.exports = { verifyUser, authenticateToken };
