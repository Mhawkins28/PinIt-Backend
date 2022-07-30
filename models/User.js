const mongoose = require("mongoose"); // require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor


const UserSchema = new mongoose.Schema({
  // username: String,
  // password: String,
  // email: String,
  // googleId: String,

  name: String,
  email: String,
  googleId: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
