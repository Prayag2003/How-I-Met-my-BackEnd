// Module Wrapper Function wraps the content of the file into a function inside the Grouping Operator ...

// Similar to IIFE in Js ( Immediately Invoked Function Expression )

// All the args have local scopes

// Every line of code , be it using require("xyz") or module.export("pqr") , everything is packed inside the IIFE or the Module Wrapper Function

// Just add () ot the end to call the function ofc !
(function (exports, require, module, __filename, __dirname) {

    console.log("Prayag Bhatt");
    console.log("Module Wrapper Function");
    var a = 10;

})();

// //  console.log(a);  // error

// not only in other files but we are unable to even access the variable in the same file due to IIFE which makes everything private

console.log(__dirname);
console.log(__filename);