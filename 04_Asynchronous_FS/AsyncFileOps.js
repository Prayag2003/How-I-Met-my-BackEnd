const fs = require("fs");

fs.writeFile("newFile.txt", "This is new File created via Async File Writing , CallBack is a must in this type of creation", (err) => {
    console.log("File Created Successfully ! ");
    console.log(err);
})

// CallBack function is passed into a function as an argument 
// which gets called when task completes . Callback tells us whether the task has been completed successfully or not

fs.appendFile("newFile.txt", " New Data has been appended ", (err) => {
    console.log("New Data Appended ", err);
})

fs.readFile("newFile.txt", "utf-8", (err, data) => {
    if (!err) console.log(data);
})