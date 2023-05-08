const mongoose = require("mongoose");

const ldl = new mongoose.Schema({
  ldl: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("ldl", ldl);
