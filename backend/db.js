const Sequelize = require("sequelize");

const sequelize = new Sequelize({
    dialect: "mysql",
    host: "lynge.vps.webdock.cloud/",
    username: "root",
    password: "zob4hSbUGSAM",
    database: "featurerequest",
});

const connectToDb = async ()=> {
    try{
        await sequelize.authenticate();
        console.log("success: connection to db");
    }
    catch(err){
        console.log(err);
    }
};

module.exports = {sequelize, connectToDb};