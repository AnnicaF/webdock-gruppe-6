const express = require("express");
const apiRoutes = require("./routes");
const {sequelize,connectToDb} = require("./db");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello"
    });
});

app.listen(port, async ()=>{
    console.log(`server run at http://localhost:${port}`);
    await connectToDb();
})