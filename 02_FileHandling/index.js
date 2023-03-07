// importing File System
const fs = require("fs");

// Creating a new file using writeFileSync ( it will be synchronous , i.e one after another , no concurrency )
fs.writeFileSync("newFile.txt", " This File is created via writeFileSync Method. ");

// If the file doesn't exists , it will create one and write the contents , else it will overWrite the contents
fs.writeFileSync("newFile.txt", " Overwritten Content since the file already exists. ");

// To Add new data to the file , use APPEND
fs.appendFileSync("newFile.txt", " This is Appended Data with the help of appendFileSync .")

// Reading the file
const bufferData = fs.readFileSync("newFile.txt")
console.log(bufferData); // in form of bytes

// NodeJS consists of one more data type which is called BUFFER ( not available in JS ) , which is mainly used to binary data while reading from a file or recieving packets over the network


// Converting the Data from Bytes to String
convertToString = bufferData.toString();
console.log(convertToString);

// Rename a File
fs.renameSync("newFile.txt" , "readWrite.txt"); 
