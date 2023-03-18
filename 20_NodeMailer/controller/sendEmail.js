// This file contains all the functionalities required for sending an email using SMTP Server ( Simple Mail Tranfer Protocol ) , here Ethereal
// Another Protocol is Internet Messaging Access Protocol ( IMAP )

const nodemailer = require("nodemailer");

// Only needed if you don't have a real mail account for testing

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // Connecting with the SMTP Server !
  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "annette90@ethereal.email",
      pass: "tHKTqqKBdfMsnFBWn7",
    },
  });

  let email = await transporter.sendMail({
    from: '"Mr. Indian Hacker <annette90@ethereal.email>" ',
    to: "nehpatel@sot.pdpu.ac.in",
    subject: "Your System has been Hacked !",
    text: "MwhahahaHahahahahahaha",
    html: "<b>Mwhahaha</b>",
  });
  console.log("Message sent: %s", email.messageId);
  res.json(email);
};

// exporting the file to app.js
module.exports = sendEmail;
