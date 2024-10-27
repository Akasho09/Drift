const express = require('express')
const cors = require("cors")
const { User } = require('./db/db')
const mainrouter = require ("./routes/index")

const app = express() ;
app.use(mainrouter);
app.use(cors())
app.use(express()) // bodyparsser to support json body 

app.listen(4000, ()=>{
    console.log("------Connected to server------")
})


