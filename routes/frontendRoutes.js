const express = require("express");
const router = express.Router();

const {showFrontend} = require("../controllers/frontendController");

router.route("/").get(showFrontend);


module.exports = router
