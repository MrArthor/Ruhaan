const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const Flash = require("connect-flash");
// const catchAsync = require("./utils/catchAsync");
const ExpressError = require("./utils/ExpressError");
const methodOverride = require("method-override");
// const Passport = require("passport");
// const LocalPassport = require("passport-local");
// const MongoSanitize = require('express-mongo-sanitize');

// const Campground = require("./models/campground");
// const Reviews = require("./models/Review");
// const User = require("./models/User");
// const { campgroundSchema, reviewSchema } = require("./schemas.js");

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Edpress Routes

// const campgrounds = require('./routes/campground');
// const ReviewRouter = require('./routes/ReviewRouter');
// const UserRoutes = require('./routes/UserRoutes');
// const { date } = require("joi");



mongoose.connect("mongodb://localhost:27017/", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
mongoose.set('useFindAndModify', false);



app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "View"));
//app.use(MongoSanitize());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname, 'Public')))
    // const SessionConfig = {
    //     secret: 'Thisshoudbebettersecret1',
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: {
    //         httpOnly: true,
    //         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    //         maxAge: 1000 * 60 * 60 * 24 * 7
    //     }
    // }

// app.use(session(SessionConfig))
// app.use(Flash())

// app.use(Passport.initialize());
// app.use(Passport.session());

// Passport.use(new LocalPassport(User.authenticate()));
// Passport.serializeUser(User.serializeUser());
// Passport.deserializeUser(User.deserializeUser());


// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.Error = req.flash('error');
//     res.locals.CurrentUser = req.user;
//     next();
// })

// app.use('/', UserRoutes);
// app.use('/campgrounds', campgrounds)
// app.use('/campgrounds/:id/reviews', ReviewRouter)


app.get("/", (req, res) => {
    res.render("home"); // render == view/home.ejs
});
app.get("/about", (req, res) => {
    //res.send("home");
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
app.post('/Login', async(req, res) => {
    try {
        const { email, username, password } = req.body;
        //   console.log(email, Username, password);
        const User = new Users({ email, username });
        const registeredUser = await Users.register(User, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('Success', 'Welcome to HMS!');
            res.redirect('/Departments');
        })
    } catch (e) {
        req.flash('Error', e.message);
        console.log(e.message);
        res.redirect('register');
    }
    console.log(req.body);
    res.send(req.body);
})
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