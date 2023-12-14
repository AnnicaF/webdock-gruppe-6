'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Comments",
      [
        {
          bodyText: "We will see what we can do here :)",
          userID: 1,
          requestID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "We looked at this, forgot to update the feedback request here - I promise we will get better at this, hah. In any case, this kind of fits into a longer discussion as to monetization of features on our platform. We will update here once a decision has been reached internally.",
          userID: 1,
          requestID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "Moving this to planned as there is clearly a lot of interest in this feature. We will update once we know where this fits into our development pipeline.",
          userID: 1,
          requestID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "I'm lost with all the server jargon. Can someone explain the difference between Apache and Nginx in simple terms?",
          userID: 1,
          requestID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "If you're into open source, consider Caddy. It's a breeze to set up with automatic HTTPS, and the config file is a joy to work with.",
          userID: 1,
          requestID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bodyText: "Apache has been my go-to for years. It might have a steeper learning curve, but the flexibility and extensive documentation make it worth it.",
          userID: 1,
          requestID: 1,
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
