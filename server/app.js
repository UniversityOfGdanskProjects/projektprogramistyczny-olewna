const express = require('express')
require('dotenv').config()
const cocktailRoutes = require('./routes/cocktails.js')
const mongoose = require('mongoose')

//express app
const app = express()

//middleware
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/cocktails',cocktailRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listener
        app.listen(process.env.PORT || 4000, () => {
            console.log("działa :)")
        })
    })
    .catch((err) => {
        console.log("nie działa :(")
        console.log(err)
    })

