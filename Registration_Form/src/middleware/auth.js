require
const jwt = require("jsonwebtoken")

// getting the Register Page
// Register is the Collection 
const Register = require("../models/registers");

const auth = async (req, res, next) => {
    // Next is always called in the Middlewares
    try {

        const tokeninsideCookie = req.cookies.jwt;
        // Verification of the Token
        const verifyUserToken = jwt.verify(tokeninsideCookie, process.env.SECRET_KEY);
        console.log(verifyUserToken);

        const user = await Register.findOne({ _id: verifyUserToken._id })
        console.log(user);
        
        req.token = tokeninsideCookie;
        req.user = user;
        
        
        next();
    }
    catch (e) {
        res.status(401).send(e);
    }
}


module.exports = auth;