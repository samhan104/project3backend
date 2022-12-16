const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wardrobe = Schema(
    {
        imageURL: {type: String, require: true}, 
        type: {type: String, require: true},
        brand: {type: String, require: true},
        size: {type: String, require: true}, 
        color: {type: String, require: true},
        isClean: Boolean
    }
)

const wardrobeList = mongoose.model('WardrobeClothe', wardrobe)

module.exports = wardrobeList