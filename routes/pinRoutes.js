const router = require("express").Router();
const pinCtrl = require("../controllers/pinCtrl");

//herokuapp.placesga/pins/:id
// loads pin page with all info INCLUDING users who have pinned this place with link to user page
router.get("/", pinCtrl.homeMap);
router.post("/", pinCtrl.createNewPin);
router.put("/:id", pinCtrl.editPin);
router.delete("/:id", pinCtrl.deletePin);
router.get("/:id", pinCtrl.getOnePin);

module.exports = router;
