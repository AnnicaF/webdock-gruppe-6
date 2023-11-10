const {sequelize} = require("./db");
const DataTypes = require("sequelize");

const Request = sequelize.define('Request', {
    title: {
      type: DataTypes.STRING
    },
    bodyText: {
      type: DataTypes.STRING
    }
});

module.exports = Request;

