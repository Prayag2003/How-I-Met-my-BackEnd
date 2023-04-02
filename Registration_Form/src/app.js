require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const auth = require("../src/middleware/auth");

const port = process.env.PORT || 3000;
require("./db/connection")

const Register = require("./models/registers");
const { log } = require("console");
const staticPath = path.join(__dirname, "../public");
// console.log(staticPath); 
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({ extended: false })) // Important to view data after registration
// Setting up the Default Template Engine as HBS
app.use(express.static(staticPath));
app.use(cookieParser()); // since it acts as a middleware
app.set("view engine", "hbs");
app.set("views", templatePath);
//registering the Partials
hbs.registerPartials(partialPath);

// Rendering the HBS File as default Page
app.get("/", auth, (req, res) => {
    res.render("index");
})

// Authentification Middlewares
app.get("/secret", auth, (req, res) => {

    console.log(`My Cookie Token :- ${req.cookies.jwt}`);
    res.render("secret");
})


app.get("/logout", auth, async (req, res) => {
    try {
        // Clearing the cookie 
        res.clearCookie("jwt");
        // console.log(req.user);
        req.user.tokens = req.user.tokens.filter((elem) => {
            return elem.token !== req.token;
        })
        console.log("Logout Successful ");

        await req.user.save();
        res.render("login");
    }
    catch (e) {
        res.status(500).send(e);
    }
})

app.get("/register", auth, (req, res) => {
    res.render("register");
})

app.get("/login", (req, res) => {
    res.render("login");
})

app.post("/login", async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.pass;
        // console.log(`Email is ${email} and Password is ${password}`);

        // Since key value pair are same , we can directly write email , all thanks to Object destructuring

        const userEmail = await Register.findOne({ email: email })
        // res.send(userEmail.password);
        // console.log(userEmail);

        const isMatch = await bcrypt.compare(password, userEmail.password);
        // console.log(isMatch);

        // MiddleWare
        const token = await userEmail.generateAuthToken();
        console.log("Post Login Token : ", token);

        res.cookie("jwt", token, {
            // Cookie expires after 10 seconds
            expires: new Date(Date.now() + 500000),
            // JS cannot change/misuse cookie
            httpOnly: true,
            // secure: true Works only for Secured Connections (https)
        });


        // Accessing the token stored in the cookie by using cookie-parser ( acts as a Handlebar )



        if (isMatch) {
            res.status(201).render("index");
        } else {
            res.render("404error");
        }

    } catch (e) {
        // Never write invalid email or password ( dont give away the details )
        res.status(400).send(" Kya Hacker banega Tu , Details toh sahi daal !" + e);
    }
})

app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.fname);
        // res.send(req.body.fname);
        const password = req.body.pass;
        const cpassword = req.body.cpass;

        if (password === cpassword) {
            const registerkardiya = new Register({
                firstname: req.body.fname,
                lastname: req.body.lname,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.Pnumber,
                email: req.body.emailID,
                password: req.body.pass,
                confirmpassword: req.body.cpass,
            })

            // Hashing the Password ( Middleware ) --> go to models/registers.js
            // JWT Auth Middleware
            const token = await registerkardiya.generateAuthToken();
            console.log(token);

            // cookie sets the Cookie name to value
            // res.cookie( name , value , [options] )

            res.cookie("jwt", token, {
                // Cookie expires after 30 seconds
                expires: new Date(Date.now() + 500000),
                // JS cannot change/misuse cookie
                httpOnly: true
            })

            const registered = await registerkardiya.save();
            console.log(registered);

            res.status(201).render("index");

        } else {
            res.send("Passwords are not matching");
        }
    }
    catch (e) {
        res.status(400).send(e);
        console.log("Error aaya BC");
    }
})

// When Handlebars Code fails to work  ( BackUp )

app.get("/", (req, res) => {
    res.send("Hello ! ... There is Some Technical Error ");
})

// const createToken = async () => {
//     // passing some unique data from the database like ID and passing the secret key (should be atleast 32 letters long).
//     // Server doesn't the states of the token ( Stateless )
//     const token = await jwt.sign({ _id: "64291fe1ce0f2660d53f92dc" }, process.env.SECRET_KEY_2 , {
//         expiresIn: "1 minutes"
//     });
//     console.log(token);

//     // Verification
//     const isVerified = await jwt.verify(token, SECRET_KEY_2);
//     console.log(isVerified);
// }

// createToken();

app.listen(port, () => {
    console.log(`Servering is Running on the Port ${port}`);
})