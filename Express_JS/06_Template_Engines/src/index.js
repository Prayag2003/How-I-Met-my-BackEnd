const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../public");

// to set the view engine
app.set("view engine", "hbs");

// app.use(express.static(staticPath));

// It Follows Top-to-Bottom Uproach , here O/P will be contents inside the index.hbs since it follows top to bottom rule
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/", (req, res) => {
    res.send("Hello from Express Server");
})

app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})
