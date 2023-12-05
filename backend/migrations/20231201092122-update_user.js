"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "roleID");

    await queryInterface.addColumn("Users", "roleID", {
      type: Sequelize.INTEGER,
      defaultValue: 2,
    });

    await queryInterface.sequelize.query(`
      UPDATE Users
      SET roleID = 1
      WHERE email LIKE '%@edu.ucl.dk%';
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Users", "roleID");

    await queryInterface.addColumn("Users", "roleID", {
      type: Sequelize.INTEGER,
    });
  },
};
