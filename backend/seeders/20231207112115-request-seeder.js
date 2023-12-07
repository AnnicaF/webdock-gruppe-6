'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Requests",
      [
        {
          title: "UFW / Firewall management",
          bodyText: "Opening / closing ports directly from the dashboard as well as adding pre/post route advanced rules",
          statusID: 1,
          categoryID: 1,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "1-click installation of Docker Applications",
          bodyText: "Since you support Docker, it would be nice to have smth like 1 click apps, where it would create a server with docker preinstalled And either have predefined containers, like mysql, redis or whatnot Or the user can upload a docker-compose file and spin the server up with those containers",
          statusID: 1,
          categoryID: 1,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ability to manage multiple websites",
          bodyText: "Although we highly discourage using a VPS for shared hosting we are under the impression that this is a feature many users are missing from Webdock. Please cast your vote here and chime in if you have seen good examples on how to manage multiple websites out there in other control panels which can serve as inspiration to our team on how we would implement this.",
          statusID: 1,
          categoryID: 1,
          userID: 1,
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
