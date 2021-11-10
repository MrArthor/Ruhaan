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
    res.render("Club");
});
app.get("/Children", (req, res) => {
    res.render("Children");
});
app.get("/Blog", (req, res) => {
    res.render("Blog");
});
app.get("/Contactus", (req, res) => {
    res.render("Contactus");
});
app.get("/Login", (req, res) => {

    res.render("Login");
});
app.post('/Signin', async(req, res) => {

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
    res.render("Forget");
});
app.get("/SingleChild", (req, res) => {
    res.render("SingleChild");
});
app.get("/register", (req, res) => {
    res.render("register");
});

app.post('/details', async(req, res) => {

    const { name, email, phone } = req.body.detail;
    console.log(name, email, phone);
    pool.query(`INSERT INTO SITECHECK VALUES ('${name}','${email}','${phone}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("details");
});

app.post('/join', async(req, res) => {

    const { name, email, phone } = req.body.joins;
    console.log(name, email, phone);
    pool.query(`INSERT INTO SITECHECK VALUES ('${name}','${email}','${phone}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("join");
});

app.post('/cdetails', async(req, res) => {
    console.log(req.body.cdetails);
    const { name, email, phone } = req.body.cdetail;
    console.log(name, email, phone);
    pool.query(`INSERT INTO SingleChild VALUES ('${name}','${email}','${phone}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("SingleChild");
});



app.post('/comments', async(req, res) => {

    const { name, email, website, area } = req.body.comment;
    console.log(name, email, website, area);
    pool.query(`INSERT INTO SITECHECK VALUES ('${name}','${email}','${website}','${area}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("comment");
});

app.post('/newsletters', async(req, res) => {

    const { email } = req.body.newsletter;
    console.log(email);
    pool.query(`INSERT INTO SITECHECK VALUES ('${email}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("newsletters");
});

app.post('/registers', async(req, res) => {

    const { name, email, pass1, pass2 } = req.body.register;
    console.log(email);
    if (pass1 == pass2) {
        pool.query(`INSERT INTO Clubs VALUES ('${name}','${email}','${pass1}')`, function(err, result, fields) {
            if (err) {
                console.log(err);
            }
            console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
                //     //console.log(results[0].Name);
        })
    }
    res.render("register");
});

app.post('/search', async(req, res) => {

    const { search } = req.body.searchbox;
    console.log(search);
    pool.query(`INSERT INTO SITECHECK VALUES ('${search}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("search");
});

app.post('/newsletter1', async(req, res) => {

    const { email } = req.body.newsletter2;
    console.log(email);
    pool.query(`INSERT INTO SITECHECK VALUES ('${email}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("newsletter1");
});

app.post('/chatbot', async(req, res) => {

    const { email } = req.body.chat;
    console.log(email);
    pool.query(`INSERT INTO SITECHECK VALUES ('${email}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("chatbot");
});

app.post('/account', async(req, res) => {

    const { email } = req.body.accounts;
    console.log(email);
    pool.query(`INSERT INTO SITECHECK VALUES ('${email}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("account");
});

app.post('/contact', async(req, res) => {

    const { firstname, lastname, email, phone, subject, comments } = req.body.contacts;
    console.log(firstname, lastname, email, phone, subject, comments);
    pool.query(`INSERT INTO SITECHECK VALUES ('${firstname}','${lastname}','${email}','${phone}','${subject}','${comments}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("contacts");
});

app.post('/searchpost', async(req, res) => {

    const { search } = req.body.searchposts;
    console.log(search);
    pool.query(`INSERT INTO SITECHECK VALUES ('${search}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("searchpost");
});

app.post('/news', async(req, res) => {

    const { email } = req.body.news1;
    console.log(email);
    pool.query(`INSERT INTO SITECHECK VALUES ('${email}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("news");
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