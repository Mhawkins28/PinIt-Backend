const User = require("../models/User");
const Pin = require("../models/Pin");
const cloudinary = require("../db/cloudinary");
const path = require("path")

const homeMap = (req, res) => {
  //load homepage map
  Pin.find({})
    .populate("Owner")
    .exec((err, pins) => {
      if (err) {
        res.status(400).json(err);
        return;
      }

      res.json(pins);
    });
};

const createNewPin = async (req, res) => {
  //create new pin

  Pin.create(req.body, (err, newPin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    
    res.json(newPin);
  
  });
};

const editPin = (req, res) => {
  Pin.findByIdAndUpdate(req.params.id, req.body, (err, pin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    Pin.find({}, (error, pins) => {
      res.json(pins);
    });
  });
};

const deletePin = (req, res) => {
  let { id } = req.params;

  Pin.findByIdAndDelete(id, (err, deletedPin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(deletedPin);
  });

  // Deletes from Cloudinary database
  // cloudinary.v2.uploader.destroy(req.body.public_id, function(error,result) {
  //   console.log(result, error) })
  //   .then(resp => console.log(resp))
  //   .catch(_err=> console.log("Something went wrong, please try again later."));

};

// async function deleteMeal(req, res) {
//     try {
//         let mealPrep = await Recipe.findById(req.params.id);
//         await cloudinary.uploader.destroy(mealPrep.cloudinary_id)
//         await mealPrep.remove()
//         res.redirect('/mealPrep');
//     } catch (err) {
//         console.log(err)
//     }
// }

const getOnePin = (req, res) => {
  Pin.findById(req.params.id, (err, pin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(pin);
  });
};

const findUserPins = (req, res) => {
  //load homepage map
  Pin.find({ Owner: `${req.params.id}` })
    .populate("Owner")
    .exec((err, pins) => {
      if (err) {
        res.status(400).json(err);
        return;
      }

      res.json(pins);
    });
};

module.exports = {
  homeMap,
  createNewPin,
  editPin,
  deletePin,
  getOnePin,
  findUserPins,
};
