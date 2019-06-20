const router = require("express").Router();
const SoundsController = require("../../controllers/SoundsController");

// Matches with "/api/sounds"
router.route("/")
  .get(SoundsController.findAll)
  .post(SoundsController.create);

// Matches with "/api/sounds/:id"
router
  .route("/:id")
  .get(SoundsController.findById)
  .put(SoundsController.update)
  .delete(SoundsController.remove);

module.exports = router;
