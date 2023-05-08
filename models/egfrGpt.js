const mongoose = require("mongoose");

const egfr = new mongoose.Schema({
  egfr: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("egfr", egfr);
