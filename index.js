const express = require("express");
const app = express();
const PORT = 3001;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

require("dotenv").config();
//routes import
const pinRoutes = require("./routes/pinRoutes");

//db
require("./db/connection");

//middleware
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes use
app.use("/pins", pinRoutes);

app.get("/", (req, res) => {
  res.json("Welcome to Project 3");
});

app.listen(PORT, () => {
  console.log("I'm feeling nothin on port", PORT);
});
