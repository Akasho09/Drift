const express=require("express")
// const middlewareuser = require('../middlewares/usermiddleware')
const jwt = require ("jsonwebtoken")
const JWT_SECRET = require("../../config")
const {userzodschema} = require('../../zod/zodschema')
const { User,Account } = require('../../db/dbc')

async function signup (req,res){
    const username = req.body.username ;
    const firstname = req.body.firstname ;
    const lastname = req.body.lastname ;
    const password = req.body.password ;
try {
   const user = await User.findOne({
        username : username
})
if(user) {
  return  res.json({
        message : ` /${username}/ has already been taken `
    })
}
else {
  if(userzodschema.safeParse(req.body)) {
const newuser = await User.create({
    username : username,
    lastname : lastname,
    firstname : firstname ,
    password : password
})
const dbuser = await newuser.save() ;
const newacc = await Account.create({
    userId : dbuser._id,
    balance : 10000
})
await newacc.save() ;

   const token = jwt.sign({
    userId: dbuser._id ,
   }, JWT_SECRET)
   console.log("new user created");
   return res.status(200).json({
    message: "YOUR ACCOUNT HAS BEEN CREATED" , 
    token : token 
})
}
else {
   return res.json({
        message : "Invalid Credentials "
    })
}
}
}
catch (error){
    res.status(400).json({ 
        message : " Try and Catch error ",
        error : error.message });
}
}

module.exports = {
    signup
}