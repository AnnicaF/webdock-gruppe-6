'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Like.belongsTo(models.User, { foreignKey: "userID",
      onDelete: "CASCADE", });
      models.User.hasMany(Like, { onDelete: "CASCADE" });

      Like.belongsTo(models.Request, { foreignKey: "requestID",
      onDelete: "CASCADE", });
      models.User.hasMany(Like, { onDelete: "CASCADE" });
    }
  }
  Like.init({
    userID: DataTypes.INTEGER,
    requestID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};