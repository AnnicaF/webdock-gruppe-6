'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reply.belongsTo(models.User, { foreignKey: "userID" });
      models.User.hasMany(Reply);

      Reply.belongsTo(models.Comment, { foreignKey: "commentID" });
      models.Comment.hasMany(Reply);
    }
  }
  Reply.init({
    bodyText: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    commentID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reply',
  });
  return Reply;
};