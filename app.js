const express = require("express");
const path = require("path");
//const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const { createPool } = require('mysql')
const pool = createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "ruhaan",
    connectionLimit: 10
});

const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());





app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "View"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'Public')))

app.get("/", async(req, res) => {


    // send records as a response
    res.render("home"); // render == view/home.ejs

});
app.get("/about", async(req, res) => {
    pool.query(`select * from sitecheck`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        const results = Object.values(JSON.parse(JSON.stringify(result)));

        console.log(results[0].Name);
    })
    res.render("About");
});
app.get("/Club", (req, res) => {
    //res.send("home");
    res.render("Club");
});
app.get("/Children", (req, res) => {
    //res.send("home");
    res.render("Children");
});
app.get("/Blog", (req, res) => {
    //res.send("home");
    res.render("Blog");
});
app.get("/Contactus", (req, res) => {
    //res.send("home");
    res.render("Contactus");
});
app.get("/Login", (req, res) => {
    //res.send("home");

    res.render("Login");
});
app.post('/Signin', async(req, res) => {
    // console.log(req.body.Club.Email);

    const { Email, Password } = req.body.Club;
    console.log(Email, Password);
    pool.query(`INSERT INTO SITECHECK VALUES ('${Email}','${Password}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));

        //     //console.log(results[0].Name);
    })
    res.render("Login");
});

app.get("/Forget", (req, res) => {
    //res.send("home");
    res.render("Forget");
});

app.all("*", (req, res, next) => {
    next(new ExpressError("What The Fuck Happened  Now??????", 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).render("error", { err });
});

app.listen(9483, () => {
    console.log("Serving on port 9483");
});