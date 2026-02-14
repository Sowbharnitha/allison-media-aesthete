const express = require("express");
const axios = require("axios");
const getSlackWebhook = require("../utils/getSlackWebhook");

const router = express.Router();

router.post("/notify-slack", async (req, res) => {
  try {
    const {
    //   jobTitle,
      firstName,
      lastName,
      email,
      phoneNumber,
    //   experienceCount
    message
    } = req.body;

    const webhookUrl = await getSlackWebhook();

    const SentMessage = {
      text: `*Media Page - Contact Form*\n
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phoneNumber}
*message:* ${message}
*Received At:* ${new Date().toLocaleString()}
      `,
    };

    await axios.post(webhookUrl, SentMessage);

    res.json({ success: true });
  } catch (error) {
    console.error("Slack notification failed:", error.message);
    res.status(500).json({ error: "Slack notification failed" });
  }
});

module.exports = router;
