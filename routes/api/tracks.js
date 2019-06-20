const router = require("express").Router();
const TracksController = require("../../controllers/TracksController");

// Matches with "/api/tracks"
router.route("/")
  .get(TracksController.findAll)
  .post(TracksController.create);

// Matches with "/api/tracks/:id"
router
  .route("/:id")
  .get(TracksController.findById)
  .put(TracksController.update)
  .delete(TracksController.remove);

module.exports = router;
