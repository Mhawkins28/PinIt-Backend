const router = require("express").Router();
const pinCtrl = require("../controllers/pinCtrl");

router.get("/home", pinCtrl.homeMap);

router.post("/", pinCtrl.createNewPin);

router.put("/:id", pinCtrl.editPin);

router.delete("/:id", pinCtrl.deletePin);

router.get("/:id", pinCtrl.getOnePin);

router.get("/userPage/:id", pinCtrl.findUserPins);

module.exports = router;