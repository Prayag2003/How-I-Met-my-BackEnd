const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome To Home Page");
})

app.get("/about", (req, res) => {
    res.status(200).send("Welcome to About Us Page");
})

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Us Page");
})

app.listen(port, () => {
    console.log(`Listening @ Port ${port}`);
})