const data = {
    name: "Prayag Bhatt",
    age: 20,
    hoobies: "Coding"
}

console.log("\nThis is Original Data");
console.log(data);

// Converting Obj to JSON

// In JSON , the key values are also of the type "string"
const jsonData = JSON.stringify(data);
console.log("\nThis is JSON Data");
console.log(jsonData);

const objData = JSON.parse(jsonData);
console.log("\nThis is Object's Data");
console.log(objData);
