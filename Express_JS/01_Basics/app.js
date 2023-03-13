// Express JS is the most popular Framework of Node JS.

// It is a web application that provides us with a simple API to build websites , web apps and backends , be it singlePage , multiplePage or Hybrid Websites.

// WHY USE IT instead REST API ?
// 1) Faster and lesser code
// 2) Scalable
// 3) Simple Routing

// Node Modules contains dependancies to run express

const express = require("express");

// to create application , we need express function
const app = express();

// There will be no need to require HTTP Modules

// To create Routing , simply pass Route and a Call Back Function inside the app.get
// app.get( route , callback );

// C R U D  Operations
// 1) get --> read data from the Server 
// 2) post  --> create new data 
// 3) put --> update 
// 4) delete --> delete

// Forward Slash Represents Root Domain 
// eg : www.prayagbhatt.com   ===>  "/"

// CallBack has two parameters , request and response ( Both are Objects ) 
// Request object represents HTTP Request and has properties for the request query string , parameters , body , HTTP Headers 
// Response obj represents HTTP Response which is sent by Express App when an HTTP req has been recieved by it.

app.get("/", (req, res) => {
    res.send("Hello from Express");
})

app.get("/about", (req, res) => {
    res.send("Hello from About");
})

app.listen(3000, () => {
    console.log("Listening @ 3000");
})

