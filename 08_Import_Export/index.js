// importing the external modules
// ./ simply means that you are going out of the current file

// Single function import export
// const adder = require("./operator")
// console.log(adder(2, 3));

// to call multiple functions 
// 1. Using Object oper
const oper = require("./operator");

console.log(oper.add(10, 5));
console.log(oper.sub(10, 5));
console.log(oper.mult(10, 5));


// 2. Using Object Destructuring
const { add, sub, mult  , name} = require("./operator");

console.log(add(4, 6));
console.log(sub(19, 19));
console.log(mult(10, 4));
console.log(name);

// the order of the import and export destructuring doesn't matter as in case of React
