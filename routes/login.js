const express = require("express");
const router = express.Router();
const { sign } = require("../helpers/jwt");
const { verifyUser } = require("../middlewares/auth");
const users = require("../data/users.json");

router.post("/", (req, res) => {
  const { username, password } = req.body;
  const user = verifyUser(username, password, users);
  if (!user) {
    return res.status(401).send("Invalid credentials");
  }
  const accessToken = sign(user);
  res.json({ accessToken });
});

module.exports = router;
