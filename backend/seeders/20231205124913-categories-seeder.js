'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          name: "Dashboard Features",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "Documentation",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          name: "Billing Features",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          name: "Networking",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          name: "Hardware and products",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          name: "Perfect Server Stacks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          name: "Mobile App",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          name: "Webdock API",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          name: "Competition",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          name: "Uncategorized",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
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
