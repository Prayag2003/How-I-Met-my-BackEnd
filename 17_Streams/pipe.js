// In Node JS, a stream is like a hose that carries data from one place to another. Instead of water, it might be carrying a file or some other kind of data. And instead of a bucket, it might be going to a database or another program.

// With stream.pipe(), you connect one stream to another stream, like connecting the tap to the hose. Then, data flows from the first stream into the second stream all by itself, without you having to manually read and write the data

const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request", (req, res) => {

    const stream = fs.createReadStream("input.txt");
    stream.pipe(res);

})

server.listen(3000, "127.0.0.1" , () => {
    console.log("Server is Running ");
});
// used to take a readable stream and connect it to a writable stream
// we want to write data while reading it side-by-side

