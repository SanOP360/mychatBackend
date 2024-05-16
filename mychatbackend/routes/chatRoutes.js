const express = require("express");
const router = express.Router();
const ChatController = require("../controllers/chatController");
const verifyUser = require("../middleware/auth");

router.post("/message", verifyUser, ChatController.postMessage);


router.get("/message", verifyUser, ChatController.getMessages);


module.exports = router;
