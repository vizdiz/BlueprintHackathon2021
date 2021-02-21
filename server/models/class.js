const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  className: String,
  // classId: String,
});

// compile model from schema
module.exports = mongoose.model("class", ClassSchema);
