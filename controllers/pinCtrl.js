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



const editPin = (req, res) => {

  Pin.findByIdAndUpdate(req.params.id, req.body, (err, pin) => {
    if (err) {
        res.status(400).json(err)
        return
    }

    Pin.find({}, (error, pins) => {
        res.json(pins)
    })

})

};



const deletePin = (req, res) => {
  let {id} = req.params

  Pin.findByIdAndDelete(id, (err, deletedPin) => {
      if (err) {
          res.status(400).json(err)
          return
      }
      
      res.json(deletedPin)
  })
};




const getOnePin = (req, res) => {

  Pin.findById(req.params.id, (err, pin) => {
    if (err) {
        res.status(400).json(err)
        return
    }
    res.json(pin)
})

};

module.exports = {
  homeMap,
  createNewPin,
  editPin,
  deletePin,
  getOnePin,
};
