const {Account,User} = require("../../db/dbc")
const mongoose = require("mongoose")

async function transfer (req,res) {
const to = req.body.to;
const sum = req.body.sum;
const session = await mongoose.startSession() ;
session.startTransaction();
const touser=await User.findOne({
    username:to
})
const toid = touser._id;
const toaccount =await Account.findOne({
    userId: toid
})
const fromaccount =await Account.findOne({
    userId : req.userId
})
if(fromaccount.balance<sum || !fromaccount) {
    return res.json({
        message : "Insufficent Funds"
    })
}
if(!toaccount) {
    return res.json({
        message : "Invalid To Account username"
    })
}
await Account.updateOne({userId:req.userId},{ $inc : {balance : -sum }})
await Account.updateOne({ userId : toid}, { $inc : {balance : sum }})

await session.commitTransaction() ;
console.log("Done Transition")
res.json ({
    message : "Money Transferred Sucessfully"
})
}

module.exports= {
    transfer
}