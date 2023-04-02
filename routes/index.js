const express = require("express");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const teachers = require("../data/teachers.json");

const users = JSON.parse(fs.readFileSync("./data/users.json"));

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, "secret_key", (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }

    const authUser = users.find((u) => u.username === user.username);

    if (!authUser) {
      return res.sendStatus(401);
    }

    req.user = authUser;
    next();
  });
};

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const authUser = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!authUser) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ username }, "secret_key", { expiresIn: "1h" });
  res.json({ token });
});

router.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "You are authorized to access this route." });
});

router.get("/teachers", authenticateToken, (req, res) => {
  res.json(teachers);
});

module.exports = router;
