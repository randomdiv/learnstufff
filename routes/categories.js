const express = require('express');
const router  = express.Router();
const db      = require('../models');
const main    = require('../helpers/main');
// adding a new category
router.post('/', (req, res)=>{
  let newCat = req.body;
  db.Category.create(newCat)
  .then(catNew=>{
    res.json(catNew);
  })
  .catch(error=>{
    res.send(error);
  });
});

module.exports = router;