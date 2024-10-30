const {Account,User} = require("../../db/dbc")
const mongoose = require("mongoose")

async function transfer (req,res) {
const to = req.body.to;
const sum = req.body.sum;
try {
const session = await mongoose.startSession() ;
session.startTransaction();
const touser=await User.findOne({
    username:to
}).session(session)
const toid = touser._id;
const toaccount =await Account.findOne({
    userId: toid
}).session(session)
const fromaccount =await Account.findOne({
    userId : req.userId
}).session(session)
if(fromaccount.balance<sum || !fromaccount) {
    await session.abortTransaction()
    return res.json({
        message : "Insufficent Funds",
        success : false
    })
}
if(!toaccount) {
    await session.abortTransaction()
    return res.json({
        message : "Invalid To Account username",
        success : false
    })
}
await Account.updateOne({userId:req.userId},{ $inc : {balance : -sum }}).session(session)
await Account.updateOne({ userId : toid}, { $inc : {balance : sum }}).session(session)

await session.commitTransaction() ;
console.log("Done Transition")
res.json ({
    message : "Money Transferred Sucessfully",
    success : true
})
}
catch(error) {
return res.json({
    error,     success : false
})
}
}
module.exports= {
    transfer
}