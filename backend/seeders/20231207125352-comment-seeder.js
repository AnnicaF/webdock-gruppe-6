'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          bodyText: "hej ho, bob",
          userID: 1,
          requestID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "hej ho, flob",
          userID: 1,
          requestID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "bob, hej ho",
          userID: 1,
          requestID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
