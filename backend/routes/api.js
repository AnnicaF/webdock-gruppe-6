const express = require("express");

const requests = require("../controller/requests");
const auth = require("../controller/auth");

const router = express.Router();


router.get("/v1/request", requests.show);
router.post("/v1/request", requests.create);

router.post("/v1/authenticate", auth.authentication);

module.exports = router;
