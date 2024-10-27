const mongoose = require("mongoose") ;

mongoose.connect('mongodb://localhost:27017/' ,
    console.log("Connected to Database")
)

const userschema = new mongoose.Schema({
    firstname : String ,
    lastname : String ,
    password : String // hashed password , use bcrypt
})

module.exports ({
    userschema
})