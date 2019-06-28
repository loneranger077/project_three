const User = require("../models/User");
const Sound = require("../models/Sound");
const authWare = require("../middleware/authware");

module.exports = function(app) {
  app.put("/api/users/:id/sounds", authWare, function(req, res) {
    User.findOneAndUpdate(
      {
        _id: req.user._id
      },
      {
        $push: {
          savedSounds: req.body.soundId
        }
      }
    )
      .then(function(result) {
        res.json({ message: "sound saved to user" });
      })
      .catch(function(err) {
        res.status(500).json({ error: err.message });
      });
  });
  app.get("/api/users/:id/sounds", authWare, function(req, res) {
    User.findOne(
      {
        _id: req.user._id
      },
      "savedSounds"
    )
      .then(function(dbUser) {
        res.json(dbUser.savedSounds);
      })
      .catch(function(err) {
        res.status(500).json({ error: err.message });
      });
  });
};
