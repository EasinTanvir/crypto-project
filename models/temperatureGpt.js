const mongoose = require("mongoose");

const temperature = new mongoose.Schema({
  temperature: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("temperature", temperature);
