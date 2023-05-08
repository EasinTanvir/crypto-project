const mongoose = require("mongoose");

const symtoms = new mongoose.Schema({
  symtoms: { type: Array, required: true },
  userId: { type: String },
});

module.exports = mongoose.model("symtoms", symtoms);
