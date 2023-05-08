const mongoose = require("mongoose");

const waist = new mongoose.Schema({
  waist: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("waist", waist);
