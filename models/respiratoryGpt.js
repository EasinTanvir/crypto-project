const mongoose = require("mongoose");

const respiratory = new mongoose.Schema({
  respiratory: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("respiratory", respiratory);
