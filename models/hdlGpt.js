const mongoose = require("mongoose");

const hdl = new mongoose.Schema({
  hdl: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("hdl", hdl);
