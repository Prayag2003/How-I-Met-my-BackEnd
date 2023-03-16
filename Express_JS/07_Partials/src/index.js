const express = require("express");
const path = require("path");
const app = express();
const port = 8000;
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../src/templates/views");
const partialsPath = path.join(__dirname, "../src/templates/partials");

// to set the view engine
app.set("view engine", "hbs");

// If we want the name of another folder
app.set("views", templatePath);

//give the Path of the static folder in the method
hbs.registerPartials(partialsPath);

app.set(express.static(staticPath));

// Template Engine Route (should be inside the views)
// Most Required or Header should in the Partials Folder

// Setting 404 Error page
// Use the asterix -> universal operator --> it matches all the other routes except the mentioned routes

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (pehla, dusra) => {
  dusra.render("about");
});

// After entering about , if user enters some wrong address
app.get("/about/*", (req, res) => {
  // passing ErrorComment as a JS Object
  res.render("404", {
    errorComment: "Error : This About Us Page is not found ",
  });
});

// Keep the Main Error At the Bottom
app.get("*", (req, res) => {
  // passing ErrorComment as a JS Object
  res.render("404", {
    errorComment: "Error : Page Not Found",
  });
});

app.listen(port, () => {
  console.log(`Listening to Port ${port}`);
});
