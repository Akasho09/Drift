const {User} = require("../../db/dbc")
const {updateuserschema} = require("../../zod/zodschema")

async function update(req,res) {
    const {firstname , lastname , password } = req.body ;
if(updateuserschema.safeParse(req.body).success){
await User.updateOne({ _id : req.userId} , {
    firstname: firstname,
    lastname : lastname ,
    password : password
})
return res.json({
    message : "Details Updated Sucessfully"
})
}
else {
    return res.json("Invalid body ")
}
} 

module.exports = {
    update 
}