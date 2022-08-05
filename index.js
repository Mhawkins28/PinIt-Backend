const express = require("express");
const app = express();
const normalizePort = require('normalize-port');
const PORT = normalizePort(process.env.PORT || '3001');
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieSession = require("cookie-session");
const path = require('path');
const cloudinary = require('./db/cloudinary');

//db
require("./db/connection");

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes use
// app.use("/xyz", xyzRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to Project 3");
});

app.listen(PORT, () => {
  console.log("I'm feeling nothin on port", PORT);
});
