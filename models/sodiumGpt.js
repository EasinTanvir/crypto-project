const mongoose = require("mongoose");

const sodium = new mongoose.Schema({
  sodium: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("sodium", sodium);
