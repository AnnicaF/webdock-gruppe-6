const express = require("express");
const requests = require("../controller/requests");

const categories = require("../controller/categories");

const auth = require("../controller/auth");

const router = express.Router();

//requests
router.get("/v1/request", requests.show);
router.get("/v1/request/:id", requests.showOne);
router.post("/v1/request", requests.create);
router.post("/v1/request/:id/comment", requests.createComment);
    //webdock can change status here
router.post("/v1/request/status", requests.changeStatus);

//categories
router.get("/v1/category", categories.show);

router.post("/v1/authenticate", auth.authentication);

module.exports = router;
