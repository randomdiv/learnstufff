const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const courseSchema = Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  users:[{
    type: Schema.Types.ObjectId,
    ref : "User"
  }],
  assignments: {
    type: Schema.Types.ObjectId,
    ref: "Assignment"
  },
  grade:{
    type: String 
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  date: {
    type: Date,
    default: Date.now
  },
  isrequired: {
    type: Boolean
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  }
});
const Course = mongoose.model("Course", courseSchema, "courses");
module.exports = Course;