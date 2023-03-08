const fs = require("fs");

const read = fs.readFileSync("newFile.txt", "utf-8");
console.log(read);
console.log("After the Data");

fs.readFile("newFile.txt", "utf-8", (err, data) => {
    console.log(data);
})
console.log("After the Data");