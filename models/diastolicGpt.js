const mongoose = require("mongoose");

const diastolic = new mongoose.Schema({
  diastolic: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("diastolic", diastolic);
