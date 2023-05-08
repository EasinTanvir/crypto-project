const mongoose = require("mongoose");

const alt = new mongoose.Schema({
  alt: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("alt", alt);
