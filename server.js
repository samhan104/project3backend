//=================================================
//                   DEPENDENCIES
//=================================================
const express = require('express')
const mongoose = require('mongoose')
const Wardrobe = require('./models/wardrobe.js')
const seed = require('./models/seed')
const Filter = require('./controllers/filter')
const cors = require('cors')
const app = express()

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
//=================================================
//                   MIDDLEWARE
//=================================================
app.use(express.json())
app.use(cors())
let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
}
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

// app.get('/seed', (req,res) => {
//     Wardrobe.create(seed, (err, data)=> {
//         res.redirect('/')
//     })
// })

app.use('/filter', Filter)

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
app.put('/:id', (req,res) => {
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
app.listen(process.env.PORT || 3000, ()=>{
	console.log('listening'); 
})

mongoose.connect('mongodb+srv://samhan104:yxbxbUBkYmB2Msyt@cluster0.gr8z5kk.mongodb.net/?retryWrites=true&w=majority', () => {
        console.log("connected mongodb")
    })