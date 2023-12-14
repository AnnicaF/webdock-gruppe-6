'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        }
      },
      requestID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Requests",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint("Likes", {
      fields: ["userID"],
      type: "foreign key",
      name:"fk_like_user",
      references: {
        table: "Users",
        field: "id"
      }
    });

    await queryInterface.addConstraint("Likes", {
      fields: ["requestID"],
      type: "foreign key",
      name:"fk_like_request",
      references: {
        table: "Requests",
        field: "id"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Likes');
  }
};