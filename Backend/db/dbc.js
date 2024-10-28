const mongoose = require("mongoose") ;

mongoose.connect('mongodb://localhost:27017/drift' ,
    console.log("Connected to Database")
)

const userschema = new mongoose.Schema({
    username :({
    type : String,
    required : true,
    }),
    firstname : String ,
    lastname : String ,
    password :({
    type : String ,
    required : true ,
    minLength : 6
    })  // hashed password , use bcrypt
})

const User = mongoose.model("User" , userschema);

module.exports = ({
    User
})