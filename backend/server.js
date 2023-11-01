const express = require("express");

const app = express();

app.use("/api", require("./routes/api"));

// Start your server
const PORT = 5173; // Use the correct port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});