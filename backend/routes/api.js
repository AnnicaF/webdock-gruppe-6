const express = require("express");
const router = express.Router();
const { Data } = require("../models"); // Import your Sequelize model

const app = express();

// Handle the POST request to insert data
router.post("/insertData", async (req, res) => {
  try {
    const { data } = req.body;

    // Insert the data into the database using Sequelize
    const newData = await User.create({
      data,
    });

    // Send a success response
    res.json({ message: "Data inserted successfully", newData });
  } catch (error) {
    // Handle any errors
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;