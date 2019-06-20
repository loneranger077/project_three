const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const soundSchema = new Schema({
  name: { type: String, required: true },
  url: { type: String, required: true }
});

const Sound = mongoose.model("Sound", soundSchema);

module.exports = Sound;
