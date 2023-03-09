const http = require("http");
const fs = require("fs");
const { dirname } = require("path");

const server = http.createServer((req, res) => {

    // Since we dont want the API to reload itself whenever a new Request comes , therefore we use it's sunc version and sort of Scope Chain it to the top

    const APIData = fs.readFileSync(`${__dirname}/API.json`, "utf-8")
    const objData = JSON.parse(APIData);

    if (req.url == "/") {
        res.write("Home ");
        res.end();
    }
    else if (req.url == "/about") {
        res.write("You are in About Us ");
        res.end();
    }
    else if (req.url == "/contact") {
        res.write("You are in Contact Us ");
        res.end();
    }
    else if (req.url == "/userapi") {
        res.writeHead(200, { "content-type": "application/json" });
        // fs.readFile(`${__dirname}/API.json`, "utf-8", (err, data) => {
        //     console.log(data)
        //     // res.end(data);
        //     // since JSON consists of Arrays of Objects 
        //     // To access a particular object 
        //     const objData = JSON.parse(data);
        res.end(objData[0].name);
        // });
    }
    else {
        res.writeHead(404, { "Content-type": "text/html" });
        // in case of Client Side Error , we ofcourse display that in HTML 
        // so use h1 tags for example
        res.write("<h1>Error 404 ! Page Not Found </h1>");
        res.end();
    }


})

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to Port 3000");
})