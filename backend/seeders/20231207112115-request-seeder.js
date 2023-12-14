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
          statusID: 2,
          categoryID: 1,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "1-click installation of Docker Applications",
          bodyText: "Since you support Docker, it would be nice to have smth like 1 click apps, where it would create a server with docker preinstalled And either have predefined containers, like mysql, redis or whatnot Or the user can upload a docker-compose file and spin the server up with those containers",
          statusID: 3,
          categoryID: 2,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ability to manage multiple websites",
          bodyText: "Although we highly discourage using a VPS for shared hosting we are under the impression that this is a feature many users are missing from Webdock. Please cast your vote here and chime in if you have seen good examples on how to manage multiple websites out there in other control panels which can serve as inspiration to our team on how we would implement this.",
          statusID: 4,
          categoryID: 3,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bandwidth usage",
          bodyText: "Can we please have an reporting tab which shows monthly bandwidth usage for a server.",
          statusID: 1,
          categoryID: 2,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Ability to designate an alternate port for WebSSH",
          bodyText: "Our Web SSH Terminal always assumes the server uses the default port 22 - allow the user to customize which port Web SSH should use when connecting",
          statusID: 1,
          categoryID: 2,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Purchase Domains at Webdock and easy DNS management",
          bodyText: "Possibly by using Cloudflare as our DNS provider where you simply link your Cloudflare account (or create one when buying a domain with us) Advanced DNS would then happen in the Cloudflare dashboard, while basic DNS management would also be available in the Webdock dashboard.",
          statusID: 1,
          categoryID: 4,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "The ability to mount ISOs to kvm VPS",
          bodyText: "I would be nice to be able to mount custom ISOs to kvm VMs. Cheers",
          statusID: 2,
          categoryID: 3,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Allow adding server to private network from dashboard and api",
          bodyText: "Currently, we have to contact support to add a server to a private network, which is a bit tiresome if you create and destroy a lot of servers or if you manage your servers using Infrastructure as code tools, so it would be great if you can add a server to a private network from the API as well as the dashboard",
          statusID: 2,
          categoryID: 4,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "South African Servers",
          bodyText: "Please can you look at providing server hosting in South Africa too? Because of the higher latencies, I have customers who won't host abroad with Webdock.",
          statusID: 3,
          categoryID: 5,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "net.core",
          bodyText: "I want to run net.core web app in linux. if you publish a documentation about it I will be very glad.",
          statusID: 4,
          categoryID: 6,
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
