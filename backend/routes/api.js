const express = require("express");
const requests = require("../controller/requests");

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

router.delete("/v1/request/:requestId", requests.deleteRequest);
//webdock can change status here
router.post("/v1/request/status", requests.changeStatus);


//categories
router.get("/v1/category", categories.show);

//login
router.post("/v1/authenticate", auth.authentication);

module.exports = router;
