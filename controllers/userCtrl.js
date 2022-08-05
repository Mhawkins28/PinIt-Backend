const User = require("../models/User");
const Pin = require("../models/Pin");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    // res.status(400).json(err);
    console.log('error')
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ err: "User not found" });
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({ token });
      } else {
        return res.status(401).json({ err: "Incorrect Password" });
      }
    });
  } catch (err) {
    // return res.status(400).json(err);
    console.log('user logged in')
  }
}

function createJWT(user) {
  return jwt.sign({ user }, SECRET, { expiresIn: "24h" });
}

module.exports = {
  signup,
  login,
};
