const express = require('express')
const db = require('./db/db')
const app = express() ;

app.listen(3000, ()=>{
    console.log("------Connected to server------")
})

