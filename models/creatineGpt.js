const mongoose = require("mongoose");

const creatine = new mongoose.Schema({
  creatine: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("creatine", creatine);
