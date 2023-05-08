const mongoose = require("mongoose");

const albumin = new mongoose.Schema({
  albumin: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("albumin", albumin);
