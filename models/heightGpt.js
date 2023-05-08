const mongoose = require("mongoose");

const height = new mongoose.Schema({
  height: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("height", height);
