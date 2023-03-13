const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {

    // sending HTML element as a response
    res.send("<h1>Welcome To Home Page</h1>");
})

app.get("/about", (req, res) => {
    res.write("<h1>Response as in form of HTML </h1>");
    res.write("<h1>HTML</h1>");
    res.send();
})

app.get("/contact", (req, res) => {
    res.send("Welcome to Contact Us Page");
})

// passing array or object inside the res.send() , we get JSON as response
app.get("/temp", (req, res) => {
    // res.send([{
    //     name: "Prayag",
    //     lastName: "Bhatt",
    // },
    // {
    //     name: "Aniket",
    //     lastName: "Suthar",
    // },
    // {
    //     name: "Tony",
    //     lastName: "Stark",
    // }
    // ]);

    // can do the same stuff by res.json() but it also convert non-objects like null and undefined , which aren't valid JSON.
    res.json([{
        name: "Prayag",
        lastName: "Bhatt",
    },
    {
        name: "Aniket",
        lastName: "Suthar",
    },
    {
        name: "Tony",
        lastName: "Stark",
    }
    ]);
})

app.listen(port, () => {
    console.log(`Listening @ Port ${port}`);
})