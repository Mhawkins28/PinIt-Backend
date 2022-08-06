const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PinSchema = mongoose.Schema({
  name: String,
  address: String,
  city: String,
  lng: Number,
  lat: Number,
  image: String,
  image_id: String,
  description: String,
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const Pin = mongoose.model("Pin", PinSchema);

module.exports = Pin;