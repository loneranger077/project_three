const User = require("../models/User");
const Sound = require("../models/Sound");

module.exports = function(app) {
  app.put("/api/sounds", function(req, res) {
    Sound.put(req.body).then(function(result) {
      res.json({ message: "sound created" }).catch(function(err) {
        res.status(500).json({ error: err.message });
      });
    });
  });
  app.get("/api/sounds", function(req, res) {
    Sound.read(req.body).then(function(result) {
      res.json({ message: "sound procured" }).catch(function(err) {
        res.status(500).json({ error: err.message });
      });
    });
  });
};
