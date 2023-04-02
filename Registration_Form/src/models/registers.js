const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const studentSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

// Methods are called when we work with Instance,
// Use Statics when interacting with the Model Directly

// Generating Tokens
studentSchema.methods.generateAuthToken = async function () {
    try {

        const generatedToken = await jwt.sign({ _id: this._id.toString() }, process.env.SECRET_KEY )
        // console.log(generatedToken);
        // Adding the 

        
        this.tokens = this.tokens.concat({ token: generatedToken });

        // adding to the Database
        await this.save();

        return generatedToken;

    } catch (e) {
        res.send(e);
        console.log("Error is ", e);
    }
}

// Before Schema Modelling , ( takes event , Hashing function)
// Converting Password into Hash
studentSchema.pre("save", async function (next) {
    // const Hashpassword = await bcrypt.hash(password , 10);
    if (this.isModified("password")) {
        // console.log(`The Current Password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        // console.log(`The Current Password is ${this.password}`);

        this.confirmpassword = await bcrypt.hash(this.password, 10);

        next();
    }
})

const Register = new mongoose.model("Register", studentSchema);

module.exports = Register;