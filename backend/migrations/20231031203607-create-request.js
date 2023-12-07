'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Requests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      bodyText: {
        type: Sequelize.STRING
      },
      statusID: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: "Statuses",
          key: "id"
        }
      },
      categoryID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id"
        }
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
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

    await queryInterface.addConstraint("Requests", {
      fields: ["userID"],
      type: "foreign key",
      name:"fk_user_id",
      references: {
        model: "Users",
        key: "id"
      }
    });

    await queryInterface.addConstraint("Requests", {
      fields: ["statusID"],
      type: "foreign key",
      name:"fk_status_id",
      references: {
        model: "Statuses",
        key: "id"
      }
    });

    await queryInterface.addConstraint("Requests", {
      fields: ["categoryID"],
      type: "foreign key",
      name:"fk_category_id",
      references: {
        model: "Categories",
        key: "id"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Requests');
  }
};