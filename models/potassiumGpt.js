const mongoose = require("mongoose");

const potassium = new mongoose.Schema({
  potassium: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("potassium", potassium);
