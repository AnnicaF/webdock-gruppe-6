const express = require("express");

const requests = require("../controller/requests");

const router = express.Router();


router.get("/v1/request", requests.show);
router.post("/v1/request", requests.create)

module.exports = router;
