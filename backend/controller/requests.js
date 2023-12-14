const { Request } = require("../models");
const { Op } = require("sequelize"); // allows us to perform a SQL LIKE query, which is used for pattern matching in search.

//get all requests
exports.show = async (req, res) => {
  try {
    const requests = await Request.findAll();
    return res.status(200).json(requests);
  } catch (err) {
    console.log(err);
    return res.send("Error");
  }
};

//get searched requests
exports.search = async (req, res) => {
  try {
    const searchQuery = req.query.q; // Extracting search term from query parameters
    console.log("Received search query: ", searchQuery); // print the received searchQuery

    const requests = await Request.findAll({
      where: {
        // condition for search where the term is found either in title or the content of the posts
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${searchQuery}%`, // Allows for partial matching
            },
          },
          {
            bodyText: {
              [Op.like]: `%${searchQuery}%`,
            },
          },
        ],
      },
    });
    return res.status(200).json(requests);
  } catch (err) {
    console.log(err);
    return res.send("Error");
  }
};

//create a new request
exports.create = async (req, res) => {
  const { title, bodyText } = req.body;

  const newRequest = Request.build({
    title: title,
    bodyText: bodyText,
  });

  try {
    await newRequest.save();

    return res.status(201).json(newRequest);
  } catch (err) {
    return res.json(err);
  }
};

// router.get("/v1/request", async (req, res) => {
//   const users = await Request.findAll();

//   res.status(200).json(users);
// });

// router.post("/v1/request", async (req, res) => {
//   const { title, bodyText } = req.body;

//   const newRequest = Request.build({
//     title: title,
//     bodyText: bodyText,
//   });

//   try {
//     await newRequest.save();

//     res.status(201).json(newRequest);
//   } catch (err) {
//     res.json(err);
//   }
// });

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

// router.get("/v1/request/:id", async (req, res) => {
//   const request = await Request.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   res.status(200).json(request);
// });

// router.patch("/v1/request/:id", async (req, res) => {
//   const request = await Request.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   const { bodyText } = req.body;

//   await request.set({
//     bodyText: bodyText,
//   });
//   await request.save();
//   res.status(200).json(request);
// });

// router.put("/v1/request/:id", async (req, res) => {
//   const request = await Request.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   const { bodyText, title } = req.body;

//   await request.set({
//     bodyText: bodyText,
//     title: title,
//   });
//   await request.save();
//   res.status(200).json(request);
// });

// module.exports = router;
