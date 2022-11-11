const nodemailer = require("nodemailer");
require("dotenv").config();

const botMail = process.env.BOTMAIL_ADDRESS;
const botPass = process.env.BOTMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.BOTMAIL_ACCOUNT,
    pass: process.env.BOTMAIL_PASSWORD,
  },
});

const mailOptions = {
  from: botMail,
  to: "vincentcmlejeune@gmail.com",
  subject: "Hello Bot",
  text: "Bip bip bop bip",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
