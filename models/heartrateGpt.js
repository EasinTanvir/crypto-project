const mongoose = require("mongoose");

const heartrate = new mongoose.Schema({
  heartrate: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("heartrate", heartrate);
