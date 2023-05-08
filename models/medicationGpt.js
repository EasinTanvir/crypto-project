const mongoose = require("mongoose");

const medication = new mongoose.Schema({
  medication: { type: Array, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("medication", medication);
