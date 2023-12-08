const express = require("express");
const requests = require("../controller/requests");
const email = require("../controller/email");
const cron = require("node-cron");

const router = express.Router();

router.get("/v1/request", requests.show);
router.get("/v1/request/:id", requests.showOne)

router.post("/v1/request", requests.create);
router.post("/v1/request/:id/comment", requests.createComment)

module.exports = router;
