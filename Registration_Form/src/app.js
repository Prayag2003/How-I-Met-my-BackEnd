const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.PORT || 3000;
require("./db/connection")

const Register = require("./models/registers");
const staticPath = path.join(__dirname, "../public");
// console.log(staticPath); 
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


app.use(express.json());
app.use(express.urlencoded({ extended: false })) // Important to view data after registration
// Setting up the Default Template Engine as HBS
app.use(express.static(staticPath));
app.set("view engine", "hbs");
app.set("views", templatePath);
//registering the Partials
hbs.registerPartials(partialPath);

// Rendering the HBS File as default Page
app.get("/", (req, res) => {
    res.render("index");
})

app.get("/register", (req, res) => {
    res.render("register");
})

app.post("/register", async (req, res) => {
    try {
        // console.log(req.body.fname);
        // res.send(req.body.fname);
        const password = req.body.pass;
        const cpassword = req.body.cpass;
        if (password === cpassword) {
            const register = new Register({
                firstname: req.body.fname,
                lastname: req.body.lname,
                age: req.body.age,
                gender: req.body.gender,
                phone: req.body.Pnumber,
                email: req.body.emailID,
                password: req.body.pass,
                confirmpassword: req.body.cpass,
            })
            const registered = await register.save();
            res.status(201).render("index");

        } else {
            res.send("Passwords are not matching");
        }

    }
    catch (e) {
        res.status(400).send(e);
    }
})

// When Handlebars Code fails to work  ( BackUp )
app.get("/", (req, res) => {
    res.send("Hello ! ... There is Some Technical Error ");
})

app.listen(port, () => {
    console.log(`Servering is Running on the Port ${port}`);
})