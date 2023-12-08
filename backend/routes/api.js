const express = require("express");
const requests = require("../controller/requests");
const auth = require("../controller/auth");


const router = express.Router();

router.get("/v1/request", requests.show);
router.post("/v1/request", requests.create);

router.post("/v1/authenticate", auth.authentication);

router.get("/v1/request/:id", requests.showOne)

// skal den med? 
router.post("/v1/request/:id/comment", requests.createComment)


module.exports = router;
