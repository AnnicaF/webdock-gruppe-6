const express = require("express");
const requests = require("../controller/requests");
const email = require("../controller/email");
const cron = require("node-cron");

const router = express.Router();

router.get("/v1/request", requests.show);
router.post("/v1/request", requests.create);

module.exports = router;
