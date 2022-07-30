const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const passport = require('passport')
const session = require('express-session');
const cookieSession = require('cookie-session');

require("dotenv").config();
//db
require("./db/connection");
require('./db/passport');


//routes import
const pinRoutes = require("./routes/pinRoutes");
const authRoutes = require('./routes/auth')


//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'JMMZ!',
  resave: false,
  saveUninitialized: true
}));

// app.use(cookieSession(
//     {name:"authSession",
//     keys:["lama"],
//     maxAge: 24 * 60 * 60 * 100,
//   }
// ))

// Google auth
app.use(passport.initialize());
app.use(passport.session());

// app.use(cors({
//   origin: "http://localhost:3000",
//   methods: "GET,POST,PUT,DELETE",
//   credentials: true,
// }))


//routes use
app.use("/pins", pinRoutes);
app.use('/', authRoutes)

app.get("/", (req, res) => {
  res.json("Welcome to Project 3");
});

app.listen(PORT, () => {
  console.log("I'm feeling nothin on port", PORT);
});
