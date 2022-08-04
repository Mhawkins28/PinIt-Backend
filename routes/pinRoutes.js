const router = require("express").Router();
const pinCtrl = require("../controllers/pinCtrl");
const upload = require("../db/multer");

// herokuapp.placesga/pins/:id
// loads pin page with all info INCLUDING users who have pinned this place with link to user page
router.get("/", pinCtrl.homeMap);

router.post("/", pinCtrl.createNewPin);
// router.post("/", upload.single('image'), pinCtrl.createNewPin);

router.put("/:id", pinCtrl.editPin);
// router.put("/:id", upload.single('image'), pinCtrl.editPin);

router.delete("/:id", pinCtrl.deletePin);

router.get("/:id", pinCtrl.getOnePin);

router.get("/userPage/:id", pinCtrl.findUserPins);

module.exports = router;