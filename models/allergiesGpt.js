const mongoose = require("mongoose");

const allergies = new mongoose.Schema({
  allergies: { type: Array, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("allergies", allergies);
