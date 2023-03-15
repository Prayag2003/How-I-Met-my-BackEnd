const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

const staticPath = path.join(__dirname, "../pubilc");
const templatePath = path.join(__dirname, "templates");

// to set the view engine
app.set("view engine", "hbs");

// If we want the name of another folder 
app.set("views", templatePath);

// app.set(express.static(staticPath));

// It Follows Top-to-Bottom Uproach , here O/P will be contents inside the index.hbs since it follows top to bottom rule
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about" , (pehla,dusra) =>{
    dusra.render("about");
})

app.get("/", (req, res) => {
    res.send("Hello from Express Server");
})

app.get("/", (req, res) => {
    throw new Error("BROKEN");
})
app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})
