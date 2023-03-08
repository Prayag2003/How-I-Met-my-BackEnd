// https://nodejs.org/api/path.html#path

const path = require("path");

// current directory name
console.log(path.dirname("C:/Users/Prayag Ravi Bhatt/OneDrive/Desktop/Node_JS/07_PathModules/index.js"))

// to find the extension of the file
console.log(path.extname("C:/Users/Prayag Ravi Bhatt/OneDrive/Desktop/Node_JS/07_PathModules/index.js"))

// file name
console.log(path.basename("C:/Users/Prayag Ravi Bhatt/OneDrive/Desktop/Node_JS/07_PathModules/index.js"))

// PARSING THE PATH
const parsedPath = path.parse("C:/Users/Prayag Ravi Bhatt/OneDrive/Desktop/Node_JS/07_PathModules/index.js");

console.log(parsedPath);
console.log(parsedPath.name);
console.log(parsedPath.dir);
console.log(parsedPath.ext);
console.log(parsedPath.root);

