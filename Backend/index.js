const express = require('express')
const bodyParser=require("body-parser");
const mainrouter = require ("./routes/index")
const cors = require("cors")

const app = express() ;
app.use(cors())
app.use(express()) // bodyparsser to support json body 
app.use(bodyParser.json());
app.use(mainrouter);

app.listen(4000, ()=>{
    console.log("------Connected to server------")
})
