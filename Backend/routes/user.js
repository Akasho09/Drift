const express= require ("express")
const userzodschema = require('../zod/zodschema')
const { User } = require('../db/dbc')
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("This is user Section")
})

router.post ("/signup" , async (req,res)=>{
    const username = req.body.username || "Guest";
    const firstname = req.body.firstname || "Unknown";
    const lastname = req.body.lastname || "Unknown";
    const password = req.body.password || "Guest@012345";
    if(userzodschema.safeParse(req.body)) {
const newuser = await User.create({
    username : username,
    lastname : lastname,
    firstname : firstname ,
    password : password
})
newuser.save().then(()=>{
    console.log("new user created");
    res.status(200).json("YOUR ACCOUNT HAS BEEN CREATED")
})
}
else {
    res.json({
        message : "Invalid Credentials "
    })
}
})


module.exports= router ;