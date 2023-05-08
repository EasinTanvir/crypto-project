const mongoose = require("mongoose");

const calcium = new mongoose.Schema({
  calcium: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("calcium", calcium);
