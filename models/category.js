const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const categorySchema = Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref: "Course"
  }]
});
const Category = mongoose.model("Category", categorySchema, "categories");
module.exports = Category;