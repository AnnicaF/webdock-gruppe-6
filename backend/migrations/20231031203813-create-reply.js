"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Replies", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bodyText: {
        type: Sequelize.STRING,
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      commentID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Comments",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    await queryInterface.addConstraint("Replies", {
      fields: ["userID"],
      type: "foreign key",
      name: "fk_reply_user",
      references: {
        table: "Users",
        field: "id",
      },
      onDelete: "CASCADE",
    });

    await queryInterface.addConstraint("Replies", {
      fields: ["commentID"],
      type: "foreign key",
      name: "fk_reply_comment",
      references: {
        table: "Comments",
        field: "id",
      },
      onDelete: "CASCADE",
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Replies");
  },
};
