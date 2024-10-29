const {User} = require("../../db/dbc")
const jwt =  require("jsonwebtoken")
const JWT_SECRET =require("../../config")
async function signin (req,res) {
    const {username , password} = req.body;
const user =await User.findOne({
username : username,
password : password
})
if(!user) {
    return res.json({
        message: "User Doesnt Exist"
    })
}
else {
    const token = jwt.sign({
        userId : user._id
    }, JWT_SECRET)

return res.json({
    messagr : "Your Account has benn Logged ",
    token : token
})
}
}

module.exports ={ 
    signin
}