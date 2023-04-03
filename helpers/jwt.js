const jwt = require("jsonwebtoken");
const secret = "mysecret";

function sign(user) {
  return jwt.sign({ username: user.username, password: user.password }, secret);
}

function verify(token, callback) {
  return jwt.verify(token, secret, callback);
}

module.exports = { sign, verify };
