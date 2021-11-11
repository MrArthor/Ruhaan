const express = require("express");
const path = require("path");
//const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const cookieParser = require("cookie-parser");
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
app.use(cookieParser());

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
const SessionConfig = {
    secret: 'Thisshoudbebettersecret1',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(SessionConfig));


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
// app.post('/login', async(req, res) => {

//     const { Email, Password } = req.body.Club;
//     console.log(Email, Password);
//     pool.query(`INSERT INTO SITECHECK VALUES ('${Email}','${Password}')`, function(err, result, fields) {
//         if (err) {
//             console.log(err);
//         }
//         console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
//             //     //console.log(results[0].Name);
//     })
//     res.render("Login");
// });
app.post('/Login', async(req, res) => {
    const { Email, Password } = req.body.Club;
    console.log(Email, Password);
    pool.query(`select * from clubs where Email='${Email}' and Password='${Password}'`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done')
        const results = Object.values(JSON.parse(JSON.stringify(result)));
        console.log(results);
        if (results != null) {
            res.render("SingleClub", { results });
        } else {
            res.render("Login");
        }


    });



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
app.get("/SingleClub", (req, res) => {
    res.render("SingleClub");
});

app.post('/registers', async(req, res) => {

    const { name, email, pass1, pass2 } = req.body.register;
    console.log(email);
    if (pass1 == pass2) {
        pool.query(`INSERT INTO register VALUES ('${name}','${email}','${pass1}')`, function(err, result, fields) {
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

app.post('/contacts', async(req, res) => {

    const { firstname, lastname, email, phone, subject, comments } = req.body.contacts;
    console.log(firstname, lastname, email, phone, subject, comments);
    pool.query(`INSERT INTO contact VALUES ('${firstname}','${lastname}','${email}','${phone}','${subject}','${comments}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("contact");
});

app.post('/searchpost', async(req, res) => {

    const { search } = req.body.searchposts;
    console.log(search);
    pool.query(`INSERT INTO searchpost VALUES ('${search}')`, function(err, result, fields) {
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
    pool.query(`INSERT INTO NewsLetter VALUES ('${email}')`, function(err, result, fields) {
        if (err) {
            console.log(err);
        }
        console.log('Done') //  const results = Object.values(JSON.parse(JSON.stringify(result)));
            //     //console.log(results[0].Name);
    })
    res.render("news");
});

app.all("*", (req, res, next) => {
    next(new ExpressError("404 Error Not Found", 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Oh No, Something Went Wrong!";
    res.status(statusCode).render("error", { err });
});

app.listen(9483, () => {
    console.log("Serving on port 9483");
});