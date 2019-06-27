const User = require("../models/User");
const Sound = require("../models/Sound");

module.exports = function(app) {
  app.post("/api/sounds", function(req, res) {
    Sound.create(req.body).then(function(result) {
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
