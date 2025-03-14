const express = require("express");
const { signUp, login, Logout } = require("../Controller/authController");

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", login);
router.get("/Logout", Logout);

module.exports = router;
