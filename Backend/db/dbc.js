const mongoose = require("mongoose") ;

mongoose.connect('' ,
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

const accountschema = new mongoose.Schema ( {
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true 
    },
    balance : {
        type : Number ,
        required : true ,
        default : 0
    }
})

const User = mongoose.model("User" , userschema);
const Account = mongoose.model( "Account" , accountschema)

module.exports = ({
    User,
    Account
})