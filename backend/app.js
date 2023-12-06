const express = require("express");
const jwt = require("jsonwebtoken");
const { User } = require("./models");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.post("/authenticate", async (req, res) => {
  try {
    const { ssoToken, name, email, avatarURL } = req.body;

    if (!ssoToken) {
      throw new Error("JWT must be provided");
    }

    // Verify the JWT token
    const user = jwt.verify(ssoToken, "e389bb7b-dc58-4b0b-8f54-dac159d5a609");

    // Determine roleID based on email domain
    const roleID = email.endsWith("@edu.ucl.dk") ? 1 : 2;

    // Check if the user exists in the database
    const [existingUser, created] = await User.findOrCreate({
      where: { id: user.id },
      defaults: {
        name: user.name,
        email: user.email,
        avatarURL: user.avatarURL,
        token: ssoToken,
        roleID: roleID,
      },
    });

    // If the user already exists, update their information
    if (!created) {
      await User.update(
        {
          name: name || user.name,
          email: email || user.email,
          avatarURL: avatarURL || user.avatarURL,
          token: ssoToken,
          roleID: roleID,
        },
        { where: { id: user.id } }
      );
    }

    // Respond with the user information
    res.json(existingUser);
  } catch (error) {
    console.error("Error authenticating user:", error);
    res.status(401).json({ error: "Invalid token" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
