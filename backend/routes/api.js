const express = require("express");
const requests = require("../controller/requests");
const likes = require("../controller/likes")
const categories = require("../controller/categories");

const auth = require("../controller/auth");
const router = express.Router();

//requests
    //these get
router.get("/v1/request", requests.show);
router.get("/v1/request/:id", requests.showOne);
router.get("/v1/cat", requests.showCat);
router.get("/v1/search", requests.search);
    //these adds to the db
router.post("/v1/request", requests.create);
router.post("/v1/request/:id/comment", requests.createComment);
    //webdock can change status here
router.post("/v1/request/status", requests.changeStatus);

//likes

router.post("/v1/like", likes.create);

//categories
router.get("/v1/category", categories.show);

//login
router.post("/v1/authenticate", auth.authentication);

module.exports = router;
