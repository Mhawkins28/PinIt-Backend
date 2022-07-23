require("dotenv").config();
require("./connection");
const seeds = require("./seeds.json");

////Example seeds
// console.log(process.env);

const User = require("../models/User");

User.deleteMany({})
  .then(() => {
    return User.insertMany(seeds);
  })
  .then((insertedUsers) => {
    console.log(insertedUsers);
  })
  .catch((err) => console.error(err))
  .finally(() => {
    process.exit();
  });
