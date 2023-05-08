const mongoose = require("mongoose");

const hba = new mongoose.Schema({
  hba: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("hba", hba);
