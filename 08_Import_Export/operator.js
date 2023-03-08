// This function is limited only to the scope of the opertor.js file
const add = (a, b) => {
    return a + b;
}

const sub = (a, b) => {
    return a - b;
}

const mult = (a, b) => {
    return a * b;
}
// to export it use , 
const name = "prayag";
module.exports.add = add;
module.exports.sub = sub;
module.exports.mult = mult;

// exporting multiple functions using Object Destucturing
module.exports = { add, sub, name, mult };