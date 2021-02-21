const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  name: String,
  // assignmentId: Number,
  classId: String,
  date: Number,
  finishedUsers: Array,
});

// compile model from schema
module.exports = mongoose.model("assignment", AssignmentSchema);
