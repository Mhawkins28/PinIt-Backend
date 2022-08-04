const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

const PinSchema = mongoose.Schema({
  name: String,
  address: String,
  city: String,
  lng: Number,
  lat: Number,
  // images: [String],
  image: String,
	// cloudinary_id: String,
  description: String,
  Owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

const Pin = mongoose.model("Pin", PinSchema);

module.exports = Pin;