const express = require("express");
const app = express();
const path = require("path");
const port = 8000;
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("This is HOME");
});

app.get("/about", (req, res) => {
  res.render("This is About");
});

app.listen(port, () => {
  console.log(`Listening to the Port ${port}`);
});
