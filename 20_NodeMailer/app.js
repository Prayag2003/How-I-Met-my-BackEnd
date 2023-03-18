const express = require("express");
const app = express();
const port = 3000 || 5000 || 8000;

// importing sendEmail from the Controllers File
const sendEmail = require("./controller/sendEmail.js");

// Route for Home Page
app.get("/", (req, res) => {
  res.send("You are inside Prayag's Server ");
});


// Routing to Email it and reach to the Controller
app.get("/Email", sendEmail);


const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Listening to Port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
};

start();
