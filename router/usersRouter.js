const express = require("express");
const router = express.Router();
const { getUsers } = require("../controller/usersController");
const decoreateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//users
router.get("/", decoreateHtmlResponse("Users"), getUsers);

module.exports = router;
