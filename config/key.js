if (process.env.NODE_ENV == "production") {
  //here you refrence the key file for the production that contains database info and //google id etc...
  module.exports = require("./key_prod");
} else {
   //here you refrence the development key file with those info
  module.exports = require("./key_dev");
  
}