const User = require("../models/User");
const Pin = require("../models/Pin");

const homeMap = (req, res) => {
  //load homepage map
  Pin.find({}, (err, pins)=>{
  if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(pins);
  });
};

const createNewPin = (req, res) => {
  //create new pin
  Pin.create(req.body, (err, newPin) => {
      if (err) {
        res.status(400).json(err);
        return;
      }
      res.json(newPin);
      // newPin.owner = req.user._id
      // Pin.save((err, newPin) => {
      //   res.json(newPin);
      // });
  });


};

const editPin = (req, res) => {};

const deletePin = (req, res) => {};

const getOnePin = (req, res) => {};

module.exports = {
  homeMap,
  createNewPin,
  editPin,
  deletePin,
  getOnePin,
};
