const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const PinSchema = mongoose.Schema({
  Name: String,
  Address: String,
  City: String,
  Coordinates: {
    lng: Number,
    lat: Number,
  },
  Images: [String],
  Description: String,
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const Pin = mongoose.model("Pin", PinSchema);

module.exports = Pin;
