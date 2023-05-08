const mongoose = require("mongoose");

const hip = new mongoose.Schema({
  hip: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("hip", hip);
