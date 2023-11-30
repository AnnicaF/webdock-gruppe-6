const express = require("express");
const router = express.Router();
const {Request} = require("./models");

router.get("/v1/request", async (req, res) => {
  const users = await Request.findAll();

  res.status(200).json(users);
});

router.post("/v1/request", async (req, res) => {
  const { title, bodyText } = req.body;

  const newRequest = Request.build({
    title: title,
    bodyText: bodyText,
  });



// search route
router.get("/v1/search", async (req, res) => {
  try {
    const searchQuery = req.query.q;
    // search logic her
    const searchResults = await YourModel.findAll({
      where: {
        // search conditions baseret på "searchQuery"
      },
    });

    res.status(200).json(searchResults);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


  try {
    await newRequest.save();

    res.status(201).json(newRequest);
  } catch (err) {
    res.json(err);
  }
});

// router.post("/v1/request/:id/comment", async (req, res) => {
//   const {bodyText} = req.body;

//   const newComment = Comment.build({
//     bodyText: bodyText,
//     requestID: req.params.id,
//   });

//   try {
//     await newComment.save();

//     res.status(201).json(newComment);
//   } catch (err) {
//     res.json(err);
//   }
// });

router.get("/v1/request/:id", async (req, res) => {
  const request = await Request.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json(request);
});

router.patch("/v1/request/:id", async (req, res) => {
  const request = await Request.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { bodyText } = req.body;

  await request.set({
    bodyText: bodyText,
  });
  await request.save();
  res.status(200).json(request);
});

router.put("/v1/request/:id", async (req, res) => {
  const request = await Request.findOne({
    where: {
      id: req.params.id,
    },
  });
  const { bodyText, title } = req.body;

  await request.set({
    bodyText: bodyText,
    title: title,
  });
  await request.save();
  res.status(200).json(request);
});

module.exports = router;
