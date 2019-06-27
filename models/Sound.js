const mongoose = require("mongoose");

const SoundSchema = new mongoose.Schema({
  name: String,
  url: String
});

module.exports = mongoose.model("Sound", SoundSchema);
