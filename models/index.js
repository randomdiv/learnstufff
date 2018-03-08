const mongoose = require("mongoose");
const key      = require('../config/key');
mongoose.set("debug", true);
//connect to database
mongoose.Promise = global.Promise;
mongoose.connect(key.mongoURI)
  .then(() => {
    console.log("Database is connected");
  })
  .catch(err => {
    console.log(err);
  });

  module.exports.User = require("./user");
  module.exports.Course = require("./course");
  module.exports.Category = require("./category");
  module.exports.Assignment = require("./assignment");