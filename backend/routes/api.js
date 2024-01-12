const express = require("express");
const requests = require("../controller/requests");
const likes = require("../controller/likes")
const categories = require("../controller/categories");
const auth = require("../controller/auth");
const router = express.Router();

//Request
router.get("/v1/request", requests.show);
router.get("/v1/request/:id", requests.showOne);
router.get("/v1/search", requests.search);

router.post("/v1/request", requests.create);
router.post("/v1/request/:id/comment", requests.createComment);
    //--------------------------------------------
    //create a reply to a specific comment
router.post("/v1/request/comment/:id/reply", requests.createReply)

router.delete("/v1/request/:requestId", requests.deleteRequest);

//webdock can change status here
router.post("/v1/request/status", requests.changeStatus);

//Like
router.post("/v1/like", likes.create);

//categories
router.get("/v1/category", categories.show);
router.get("/v1/cat", requests.showCat);

//Login
router.post("/v1/authenticate", auth.authentication);

module.exports = router;
