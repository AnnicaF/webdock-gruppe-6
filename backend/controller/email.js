// Require:
const postmark = require("postmark");

const client = new postmark.ServerClient(
  "5ad8a908-04d3-4dbc-918b-228993c31b2a"
);

// Function to send an email
exports.sendEmail = async (req, res) => {
  try {
    // Send an email
    client.sendEmail({
      From: "abfr31852@edu.ucl.dk",
      To: "lban38219@edu.ucl.dk",
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
