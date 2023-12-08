'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, { foreignKey: "userID" });
      models.User.hasMany(Comment);

      Comment.belongsTo(models.Request, { foreignKey: "requestID" });
      models.Request.hasMany(Comment);
    }
  }
  Comment.init({
    bodyText: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    requestID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};