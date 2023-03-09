// 1 Convert to JSON 
// 2 Add it to another File
// 3 Read the File
// 4 Again Convert Back to Object
// 5 log it

const fs = require("fs");
const data = {
    name: "Prayag",
    age: 20,
    hobby: "Coding"
}

const jsonData = JSON.stringify(data);

fs.writeFile("new.json", jsonData, (err) => {
    console.log("Data is being written to new.json\n");
})

fs.readFile("new.json", "utf-8", (err) => {
    const objData = JSON.parse(jsonData);
    console.log(objData);
})


