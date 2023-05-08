const mongoose = require("mongoose");

const trig = new mongoose.Schema({
  trig: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("trig", trig);
