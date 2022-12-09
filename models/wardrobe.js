const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wardrobe = Schema(
    {
        type: String,
        brand: String,
        size: String, 
        color: String,
        isClean: Boolean
    }
)

const wardrobeList = mongoose.model('WardrobeClothe', wardrobe)

module.exports = wardrobeList