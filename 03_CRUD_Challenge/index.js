const fs = require("fs");

// fs.mkdirSync("Challenge");

fs.writeFileSync("Challenge/Bio.txt", "[ Name :- Prayag Bhatt ] , [ Languages :- C++ , JavaScript , Golang , Java ]  ");

fs.appendFileSync("Challenge/Bio.txt", " [ Hobbies :- Coding , Painting , Playinh Piano , Listening to Music  ] ");

// Reading file with File Encoding  instead of Buffer 
const readUsingUTF = fs.readFileSync("Challenge/Bio.txt", "utf-8");
console.log(readUsingUTF);

// renaming the File
fs.renameSync("Challenge/Bio.txt", "Challenge/myBio.txt");

// Deleting

// 1. First deleting all the files inside the folder and then deleting the folder

// fs.rmdirSync("Challenge/myBio.txt"); // gives ENOENT error since we cant use rmdir to delete a file , thats only for a folder

// fs.unlinkSync("Challenge/myBio.txt");
// fs.rmdirSync("Challenge");

// 2. Directly deleting the folder
// fs.rmdirSync("Challenge");  // leads to ENOTEMPTY error since it is not empty 


