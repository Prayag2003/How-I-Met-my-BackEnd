const http = require("http");

const server = http.createServer((req, res) => {

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