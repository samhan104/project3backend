const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req,res) => {
    res.send(`hello`)
})



app.listen(3000, () => {
    console.log('listening')
})

mongoose.connect('mongodb+srv://samhan104:hHkGCYhVATr1oHGi@cluster0.gr8z5kk.mongodb.net/?retryWrites=true&w=majority', () => {
        console.log("connected mongodb")
    })