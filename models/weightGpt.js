const mongoose = require("mongoose");

const weight = new mongoose.Schema({
  weight: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("weight", weight);
