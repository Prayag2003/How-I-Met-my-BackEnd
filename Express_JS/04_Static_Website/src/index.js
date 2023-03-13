// Pure Static Websites can be hosted by using Express

// MiddleWare --> intermediary  between request and response
// express.static

const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

// built-in Middleware
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Helo");
})

app.listen(port, () => {
    console.log(`Listening to Port ${port}`);
})