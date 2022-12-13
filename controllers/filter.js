const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const Wardrobe = require('../models/wardrobe.js')

//sorting
router.get('/', (req, res) => {
    Wardrobe.distinct("type", (err, foundWardrobe) => {
        res.json(foundWardrobe)
    })
})

router.get('/:setFilter', (req, res) => {
    Wardrobe.find({type:req.params.setFilter}, (err, foundWardrobe) => {
        res.json(foundWardrobe)
    })
})

module.exports = router