const mongoose = require("mongoose");

const bun = new mongoose.Schema({
  bun: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("bun", bun);
