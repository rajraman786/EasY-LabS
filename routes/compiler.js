const express = require("express");
const { compiler } = require("../controllers/compiler");

const router = express.Router();

router.route("/").post(compiler);

module.exports = router;
