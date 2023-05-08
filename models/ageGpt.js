const mongoose = require("mongoose");

const age = new mongoose.Schema({
  age: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("age", age);
