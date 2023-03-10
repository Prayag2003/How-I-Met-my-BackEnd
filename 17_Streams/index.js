// Streams in NODE JS allows us to read/write in a Continuous Fashion , can be considered as filling a glass of water . It is filled in parts like some sort of continuous manner and like that , Streams supply data in form of segments or chunks , making it more faster and efficient . 

// It's just live Streaming , not downloading the full thing and then seeing it , eg : watching a YT video , there is a slider which shows white line (loaded content)

// They can be used for various purposes like reading / writing  files , recieving/ sending data over a network and processing large data sets.

// There are four types of streams in Node.js:

// 1 ) Readable Stream: It is used to read data from a source in chunks.
// 2 ) Writable Stream: It is used to write data to a destination in chunks.
// 3 ) Duplex Stream: It is used for both reading and writing data.
// 4 ) Transform Stream: It is used to modify data while it is being read or written.

const fs = require("fs");
const http = require("http");
const server = http.createServer();

server.on("request", (req, res) => {
    // fs.readFile("input.txt", "utf-8", (err, data) => {
    //     if (err) return console.error(err);
    //     res.end(data);
    // })

    // Creating a readStream and Handle Stream Events -> data , end , error 
    const stream = fs.createReadStream("input.txt");
    stream.on("data", (chunks) => {
        res.write(chunks);
    })

    stream.on("end", () => {
        res.end();
    })

    stream.on("error", (err) => {
        res.write(err);
        res.end();
    })
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening to Port 3000 ");
})


