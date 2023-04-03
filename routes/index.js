const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const TeachersController = require("../controllers/TeachersController");
const { authenticateToken } = require("../middlewares/auth");

router.post("/login", AuthController.login);
router.get("/teachers", authenticateToken, TeachersController.getAllData);

module.exports = router;
