const mongoose = require("mongoose");

const systolic = new mongoose.Schema({
  systolic: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("systolic", systolic);
