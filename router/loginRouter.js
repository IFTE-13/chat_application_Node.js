const express = require("express");
const router = express.Router();
const { getLogin } = require("../controller/loginController");
const decoreateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//login
router.get("/", decoreateHtmlResponse("Login"), getLogin);

module.exports = router;
