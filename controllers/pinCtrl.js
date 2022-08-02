const User = require("../models/User");
const Pin = require("../models/Pin");
const cloudinary = require('../db/cloudinary')

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


const createNewPin = (req, res) => {
  //create new pin
  Pin.create(req.body, (err, newPin) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    // res.json(newPin);
    // newPin.owner = req.user._id
    // Pin.save((err, newPin) => {
    res.json(newPin);
    // });
  });
};



// async function createMeal(req, res) {
//   try {    
//       const result = await cloudinary.uploader.upload(req.file.path) 
//       const newMeal = new Recipe({
//           mealName: req.body.mealName,
//           image: result.secure_url,
//           cloudinary_id: result.public_id,
//           notes: req.body.notes,
//           ingredients: req.body.ingredients,
//           instructions: req.body.instructions,
//           protein: req.body.protein,
//           fat: req.body.fat,
//           carbs: req.body.carbs,
//           calories: req.body.calories,
//           owner: req.user._id
//       })
//          await newMeal.save(() => res.redirect('/mealPrep'))     
//   } catch (err) {
//   console.log(err)
//   }
// }




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

module.exports = {
  homeMap,
  createNewPin,
  editPin,
  deletePin,
  getOnePin,
};
