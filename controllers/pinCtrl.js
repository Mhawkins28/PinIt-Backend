const User = require("../models/User");
const Pin = require("../models/Pin");
const cloudinary = require("../db/cloudinary");
const path = require("path")

// const homeMap = (req, res) => {
//   //load homepage map
//   Pin.find({}, (err, pins) => {
//   if (err) {
//       res.status(400).json(err);
//       return;
//     }

//     res.json(pins);
//   });
// };

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

  // const {image} = req.body
  // const uploadedImage = await cloudinary.uploader.upload(image,
  // { 
  //   upload_preset: 'unsigned_upload',
  //   allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp']
  // }, 
  // function(error, result) {
  //   if (error) {
  //     console.log(error)
  //   }

  //   console.log(result); });
  //   res.status(200).json(result)

  //   try {
  //     res.status(200).json(uploadedImage)
  //   } catch(err) {
  //     console.log(err)
  //   }

  Pin.create(req.body, (err, newPin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    // res.json(newPin);
    // newPin.owner = req.user._id
    // Pin.save((err, newPin) => {
      // const fileStr = req.body.data;
      // console.log(req.body.data)
      // const uploadResponse = await cloudinary.uploader.upload(fileStr, {
      //     upload_preset: 'dev_setups',
      // });
      // console.log(uploadResponse);
      res.json(newPin);
    // });
  });






  // Pin.create(req.body, (err, newPin) => {
  //   if (err) {
  //     res.status(400).json(err);
  //     return;
  //   }
  //   // res.json(newPin);
  //   // newPin.owner = req.user._id
  //   // Pin.save((err, newPin) => {
  //   res.json(newPin);
  //   // });
  // });
};


// const createNewPin = async (req, res) => {
//   //create new pin
//   try {
//       const result = await cloudinary.uploader.upload(req.file.path)
//       const newPin = new Pin({
//           name: req.body.name,
//           address: req.body.address,
//           city: req.body.city,
//           lng: req.body.lng,
//           lat: req.body.lat,
//           image: result.secure_url,
//           cloudinary_id: result.public_id,
//           description: req.body.description,
//           owner: req.user._id
//       })
//          await newPin.save(() => res.json(newPin))
//   } catch (err) {
//   console.log(err)
//   }
// };

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

// async function editMeal(req, res) {
//   try {
//   let mealPrep = await Recipe.findById(req.params.id);
//   const data = {
//           mealName: req.body.mealName || mealPrep.mealName,
//           image: mealPrep.image,
//           cloudinary_id: mealPrep.cloudinary_id,
//           notes: req.body.notes || mealPrep.notes,
//           ingredients: req.body.ingredients || mealPrep.ingredients,
//           instructions: req.body.instructions || mealPrep.instructions,
//           protein: req.body.protein || mealPrep.protein,
//           fat: req.body.fat || mealPrep.fat,
//           carbs: req.body.carbs || mealPrep.carbs,
//           calories: req.body.calories || mealPrep.calories,
//           owner: req.user._id || mealPrep.owner
//   }
//   console.log(data)
//   mealPrep = await Recipe.findByIdAndUpdate(req.params.id, data, {new:true});
//   res.redirect(`/mealPrep`)
//   } catch(err) {
//       console.log(err)
//   }
// }

// I had an issue where if the user wanted to update just the text fields, they would have to upload an image. So had to make a seperate route for updating the text and updating the photo.

// async function editMealPhoto(req, res) {
//   try {
//       let mealPrep = await Recipe.findById(req.params.id);
//       await cloudinary.uploader.destroy(mealPrep.cloudinary_id)
//       const result = await cloudinary.uploader.upload(req.file.path)
//       const data = {
//           mealName: req.body.mealName || mealPrep.mealName,
//           image: result.secure_url || mealPrep.image,
//           cloudinary_id: result.public_id || mealPrep.cloudinary_id,
//           notes: req.body.notes || mealPrep.notes,
//           ingredients: req.body.ingredients || mealPrep.ingredients,
//           instructions: req.body.instructions || mealPrep.instructions,
//           protein: req.body.protein || mealPrep.protein,
//           fat: req.body.fat || mealPrep.fat,
//           carbs: req.body.carbs || mealPrep.carbs,
//           calories: req.body.calories || mealPrep.calories,
//           owner: req.user._id || mealPrep.owner
//       }
//       mealPrep = await Recipe.findByIdAndUpdate(req.params.id, data, {new:true})
//       res.redirect('/mealPrep')
//   } catch (err) {
//       console.log(err)
//   }
// }

const deletePin = (req, res) => {
  let { id } = req.params;

  Pin.findByIdAndDelete(id, (err, deletedPin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }

    res.json(deletedPin);
  });
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
