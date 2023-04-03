const express = require("express");
const router = express.Router();
const teachers = require("../data/teachers.json");
const { authenticateToken } = require("../middlewares/auth");

router.get("/", authenticateToken, (req, res) => {
  res.json(teachers);
});

module.exports = router;
