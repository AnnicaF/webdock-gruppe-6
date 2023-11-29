"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Annica Frederiksen",
          email: "abfr31852@edu.ucl.dk",
          avatarURL: "http://placekitten.com/200/300",
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lene Hansen",
          email: "annif011098@gmail.com",
          avatarURL: "http://placekitten.com/200/300",
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
