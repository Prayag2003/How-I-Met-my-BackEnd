// Built-In Module called Events Module
// Where we can create , fire , run , listen the  Events

// We will create a Class named Events to handle the events
const Events = require("events");
const { Stats } = require("fs");

//  creating an object of the Class Events
const eventEmitter = new Events();

// creating Listener of the action , similar to .addEventListener in JS


// 1) Registering the event which is to be fired only one time 
eventEmitter.on("onClick", () => {
    console.log("This is Event Listener and it's always defined before it's emitted / called (OfCourse) ");
})

// Emitting / Calling the Event
eventEmitter.emit("onClick");


// 2 ) Create a event listener instance and couple of callbacks
// Beauty of NODEJS is that we can call multiple functions with the help of emitting a single emitter 

eventEmitter.on("newEmitter", () => {
    console.log("Multiple Functions can be called using the same Emitter  ");
})

eventEmitter.on("newEmitter", () => {
    console.log("It's Super Cool");
})

eventEmitter.emit("newEmitter");


// 3 ) Registering for the event using CallBack Function
eventEmitter.on("checkStatus", (status, msg) => {
    console.log(`Status Code is ${status} and Message is ${msg}`);
})

eventEmitter.emit("checkStatus", 200, "ok");