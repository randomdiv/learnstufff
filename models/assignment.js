const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const assSchema = new Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  course: {
    type: Schema.Types.ObjectId,
    ref: "Course"
  },
  grade: {
    type: String
  },
  isrequired:{
    type: Boolean
  }

});
module.exports = mongoose.model("Ass",assSchema, "assignments");