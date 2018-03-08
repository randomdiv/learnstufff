const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = Schema({
  googleID: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  firstName:{
    type: String
  },
  lastName:{
    type: String
  },
  image:{
    type: String
  },
  //user types are student or Teacher or Admin for now
  userType: {
    type: String,
    required: true
  },
  courses: [{
    type: Schema.Types.ObjectId,
    ref : "Course"
  }]
});
const User = mongoose.model("Assignment", userSchema, "users");
module.exports = User;