const {sequelize} = require("./db");
const DataTypes = require("sequelize");

const User = sequelize.define('User', {
    name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      }
});

module.exports = User;

