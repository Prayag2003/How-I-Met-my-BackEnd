// The http.createServer() methods includes the request and response parameters which is supplied by NodeJS
const http = require("http");

// The Request Object is used to get information about the current HTTP requests  eg : url , data , header , body
// eg : searching on google , "Prayag Bhatt" ,  that means we are requesting google to send a response about "Prayag Bhatt" in the form of web pages we see !!

// responsding back that server has been created
const server = http.createServer((req, res) => {

    console.log(req.url);
    res.end("Request Recieved Successfully ! Hello from the Other Side");

})

// Which Port to listen and IP Address of the LocalHost
server.listen(3000, "127.0.0.1", () => {
    console.log(`Listening to the Port 3000`);
})
