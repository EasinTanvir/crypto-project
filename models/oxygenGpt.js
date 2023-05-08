const mongoose = require("mongoose");

const oxygen = new mongoose.Schema({
  oxygen: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("oxygen", oxygen);
