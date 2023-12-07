// Require:
const postmark = require("postmark");

const client = new postmark.ServerClient(
  "c3d41965-18a4-479f-a591-4369b7f5952c"
);

// Function to send an email
exports.sendEmail = async (req, res) => {
  try {
    // Send an email
    client.sendEmail({
      From: "uclfeedback@webdock.io",
      To: "abfr31852@edu.ucl.dk",
      Subject: "Hello from Postmark",
      HtmlBody: "<strong>Hello</strong> dear Postmark user.",
      TextBody: "Hello from Postmark!",
      MessageStream: "outbound",
    });

    res.json({
      message: "E-mail sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
