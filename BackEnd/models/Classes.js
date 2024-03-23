const mongoose = require("mongoose");

const ClassesSchema = new mongoose.Schema({
  term: String,
  course: String,
  sect: String,
  crn: String,
  className: String,
  cr: String,
  schedule: String,
  dates: String,
  instructor: String,
  seats: String,
  users: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  }]
});

const Classes = mongoose.model('Classes', ClassesSchema);
module.exports = Classes;