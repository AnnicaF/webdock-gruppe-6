const { Op } = require("sequelize");
const { Request, User } = require("../models");
const postmark = require("postmark");
const cron = require("node-cron");

const client = new postmark.ServerClient(
  "c3d41965-18a4-479f-a591-4369b7f5952c"
);

exports.sendDailyEmail = async () => {
  try {
    const currentDate = new Date();
    const twentyFourHoursAgo = new Date(
      currentDate.getTime() - 24 * 60 * 60 * 1000
    );

    const newRequests = await Request.findAll({
      where: {
        createdAt: {
          [Op.gte]: twentyFourHoursAgo,
        },
      },
    });

    const usersWithRoleID = await User.findAll({
      where: {
        roleID: 1,
      },
    });

    // email content
    const emailContent = `<p>Dear Admin,</p><p>Here are the new requests created in the last 24 hours:</p><ul>${newRequests
      .map((request) => `<li>${request.title}</li>`)
      .join("")}</ul>`;
    ("<p>Good luck with your work!</p>");

    for (const user of usersWithRoleID) {
      await client.sendEmail({
        From: "uclfeedback@webdock.io",
        To: user.email,
        Subject: "New Requests in the Last 24 Hours",
        HtmlBody: emailContent,
        MessageStream: "outbound",
      });
    }

    console.log("Daily email sent successfully");
  } catch (error) {
    console.error("Error sending daily email:", error);
  }
};

cron.schedule("00 15 * * *", exports.sendDailyEmail);
