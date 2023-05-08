const mongoose = require("mongoose");

const ast = new mongoose.Schema({
  ast: { type: String, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("ast", ast);
