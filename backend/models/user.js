// models/user.js
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role, { foreignKey: "roleID" });
      models.Role.hasMany(User);

      User.hasMany(models.Request, { foreignKey: "userID" });

      User.hasMany(models.Comment, { foreignKey: "userID" });

      User.hasMany(models.Reply, { foreignKey: "userID" });

      User.hasMany(models.Like, { foreignKey: "userID",
      onDelete: "CASCADE", });
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
