// models/user.js
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: "roleID" });
      models.Role.hasMany(User);
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      avatarURL: DataTypes.STRING,
      token: DataTypes.STRING,
      roleID: {
        type: DataTypes.INTEGER,
        references: {
          model: "Role",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
