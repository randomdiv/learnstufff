const express = require('express');
const router  = express.Router();
const db      = require('../models');
const main    = require('../helpers/main');

//getting all categories
router.get("/", (req, res)=>{
  db.Category.find({})
    .populate("courses")
    .exec
    .then(categories=>{
      res.json(categories);
    })
    .catch(error=>{
      res.send(error);
    });
});
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
//edit a category
router.put("/:id/edit", (req, res) =>{
  db.Category.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedCategory=>{
      res.json(updatedCategory);
    })
    .catch(error =>{
      res.send(error);
    });
});
//delete category
router.delete("/:id", (req, res) =>{
  db.Category.findByIdAndRemove(req.params.id)
    .then(()=>{
      res.json({message:"Category has been deleted!"});
    })
    .catch(error=>{
      res.send(error);
    });
});

module.exports = router;