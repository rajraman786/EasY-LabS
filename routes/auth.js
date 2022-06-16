const express = require("express");
const { verifyEmail, signup, login } = require("../controllers/auth");

const router = express.Router();

router.route("/verifyEmail").post(verifyEmail);
router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
