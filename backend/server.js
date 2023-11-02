const express = require("express");
const cors = require("cors");

const app = express();

app.use("/api", require("./routes/api"));
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));


// Start your server
const PORT = 3005; // Use the correct port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});