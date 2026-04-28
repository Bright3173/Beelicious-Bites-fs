const nodemailer = require("nodemailer");

// Create transporter (SMTP)
const transporter = nodemailer.createTransport({
  host: "smtp.mailersend.net",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER, // mlsn.xxxxx
    pass: process.env.SMTP_PASS, // SMTP password
  },
});

// Verify connection (DEBUG TOOL)
const verifyTransport = async () => {
  try {
    await transporter.verify();
    console.log("SMTP connection successful");
  } catch (error) {
    console.error("SMTP connection failed:", error.message);
  }
};

const sendEmail = async ({ to, subject, html }) => {
  try {
    const info = await transporter.sendMail({
      from: `"Beelicious_mail" <MS_3MTFRw@test-r83ql3pvy1vgzw1j.mlsender.net>`,
      to,
      subject,
      html,
    });

    return info;
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw error;
  }
};

module.exports = {
  sendEmail,
  verifyTransport,
};
