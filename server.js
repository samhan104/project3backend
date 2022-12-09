//=================================================
//                   DEPENDENCIES
//=================================================
const express = require('express')
const mongoose = require('mongoose')
const Wardrobe = require('./models/wardrobe.js')
const seed = require('./models/seed')
const cors = require('cors)')
const app = express()

//=================================================
//                   MIDDLEWARE
//=================================================
app.use(express.json())
app.use(cors())

//=================================================
//                     ROUTES
//=================================================
app.post('/', (req,res) => {
    Wardrobe.create(req.body, (err, createWardrobe)=>{
        res.json(createWardrobe)
    })
})

app.get('/', (req,res) => {
    Wardrobe.find({}, (err, getWardrobe)=> {
        res.json(getWardrobe)
    })
})

app.get('/seed', (req,res) => {
    Wardrobe.create(seed, (err, data)=> {
        res.redirect('/')
    })
})

//show
app.get('/:id', (req,res)=> {
    Wardrobe.findById(req.params.id, (err, findWardrobe)=> {
        res.json(findWardrobe)
    })
})

//Update
//edit
app.get('/:id/edit', (req,res) => {
    Wardrobe.findById(req.params.id, (err, editWardrobe)=> [
        res.json(editWardrobe)
    ])
})

//update
app.put('/:id/', (req,res) => {
    Wardrobe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err,updateWardrobe)=>[
        res.json(updateWardrobe)
    ])
})

//Delete
app.delete('/:id', (req,res) => {
    Wardrobe.findByIdAndRemove(req.params.id, (err, deleteWardrobe)=>{
        res.json(deleteWardrobe)
    })
})


//=================================================
//                   CONNECTION
//=================================================
app.listen(3000, () => {
    console.log('listening')
})

mongoose.connect('mongodb+srv://samhan104:hHkGCYhVATr1oHGi@cluster0.gr8z5kk.mongodb.net/?retryWrites=true&w=majority', () => {
        console.log("connected mongodb")
    })