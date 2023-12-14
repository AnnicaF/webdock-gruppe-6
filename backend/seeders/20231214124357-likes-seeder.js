'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Likes",
      [
        {
          userID: 1,
          requestID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userID: 1,
          requestID: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
      )
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
