const express = require('express');
const router  = express.Router();

router.get('/', (req, res) =>{
  res.json({Message: "This is the index page"});
});

module.exports = router;