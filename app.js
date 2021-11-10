const express = require("express");
const path = require("path");
//const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const sql = require("mssql");

const config = {
    user: 'root',
    password: '',
    database: 'ruhaana',
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'phpmyadmin'
    },
    port: 12292
}

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
    try {
        await sql.connect(config, () => {
            console.log("connected");
        });
        const result = await sql.query `SELECT * FROM 
        sitecheck  WHERE 1`
        console.log(result)
    } catch (err) {
        console.log('Fuck')
            // ... error checks
    }
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
app.post("/Login", (req, res) => {

    //res.send("home");
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