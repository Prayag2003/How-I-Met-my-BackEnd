const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/RegistrationForm")
    .then(() => { console.log("Successful Connection with the Database"); })
    .catch(e => { console.log("Unsuccessful Connection") });