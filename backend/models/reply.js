"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    static associate(models) {
      Reply.belongsTo(models.User, { foreignKey: "userID" });
      models.User.hasMany(Reply);

      Reply.belongsTo(models.Comment, {
        foreignKey: "commentID",
        onDelete: "CASCADE",
      });
      models.Comment.hasMany(Reply, { onDelete: "CASCADE" });
    }
  }

  Reply.init(
    {
      bodyText: DataTypes.STRING,
      userID: DataTypes.INTEGER,
      commentID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );

  return Reply;
};
