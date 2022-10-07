const express = require("express");
const router = express.Router();
const { getInbox } = require("../controller/inboxController");
const decoreateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

//login
router.get("/", decoreateHtmlResponse("Inbox"), getInbox);

module.exports = router;
