const mongoose = require("mongoose");

const glucose = new mongoose.Schema({
  glucose: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("glucose", glucose);
