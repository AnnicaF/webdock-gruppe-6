const express = require("express");

const requests = require("../controller/requests");
const categories = require("../controller/categories");

const router = express.Router();

//requests
router.get("/v1/request", requests.show);
router.post("/v1/request", requests.create);

//categories
router.get("/v1/category", categories.show);

module.exports = router;
