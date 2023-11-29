const express = require("express");
const apiRoutes = require("./routes");
const {Sequelize} = require("sequelize");
const config = require("./config/config.json");
const cors = require("cors");

const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "lynge.vps.webdock.cloud/",
    username: "root",
    password: "zob4hSbUGSAM",
    database: "featurerequest",
});

const connectToDb = async () => {
try {
    await sequelize.authenticate();
    console.log("success: connection to db");
} catch (err) {
    console.log(err);
}
};

module.exports = { sequelize, connectToDb };



const app = express();
const port = 3000;

app.use(cors());

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