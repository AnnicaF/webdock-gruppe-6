// Importer nødvendige moduler og din User-model
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("./models");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/verify", async (req, res) => {
  try {
    const { ssoToken } = req.body;

    if (!ssoToken) {
      throw new Error("JWT must be provided");
    }

    const user = jwt.verify(ssoToken, "e389bb7b-dc58-4b0b-8f54-dac159d5a609");
    console.log(user);

    // Indsæt bruger i databasen
    await User.findOrCreate({
      where: { id: user.id },
      defaults: {
        name: user.name,
        email: user.email,
        avatarURL: user.avatarURL,
      },
    });

    res.json(user);
  } catch (error) {
    console.error("Error verifying token or inserting user:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});


app.post("/insertUser", async (req, res) => {
  try {
    const { id, name, email, avatarURL } = req.body;

    await User.findOrCreate({
      where: { id: id },
      defaults: {
        name: name,
        email: email,
        avatarURL: avatarURL,
      },
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
