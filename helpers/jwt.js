const jwt = require("jsonwebtoken");
const secret = "mysecret";

function generateToken(user) {
  return jwt.sign({ username: user.username, password: user.password }, secret);
}

function verifyToken(token, callback) {
  return jwt.verify(token, secret, callback);
}

module.exports = { generateToken, verifyToken };
