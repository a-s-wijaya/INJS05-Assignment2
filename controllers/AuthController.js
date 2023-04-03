const { generateToken } = require("../helpers/jwt");
const { verifyUser } = require("../middlewares/auth");
const users = require("../data/users.json");

class AuthController {
  static login(req, res) {
    const { username, password } = req.body;
    const user = verifyUser(username, password, users);
    if (!user) {
      return res.status(401).send("Invalid credentials");
    }
    const accessToken = generateToken(user);
    res.json({ accessToken });
  }
}

module.exports = AuthController;
