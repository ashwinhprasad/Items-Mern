const express = require('express');
const router = express.Router();

const itemModel = require('../../models/Item');


// get request to api/items
router.get('/',(req,res) => {
    itemModel.find().sort({date:-1})
        .then(items => res.json(items));
});


// post request to api/items
router.post('/',(req,res) => {
    const newItem = new itemModel({
        name:req.body.name
    })

    newItem.save()
        .then(item => res.json(item))
});


// delete request to api/items
router.delete('/:id',(req,res) => {
    itemModel.findById(req.params.id)
     .then(item => item.remove().then(() => res.json({success:true})))
     .catch(err => res.status(404).json({success:false}) )
});


module.exports = router;