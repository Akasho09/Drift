const express = require("express");
const {middlewareuser} = require("../../middlewares/usermiddleware")
const {balance} = require("./balance")
const {transfer} = require("./transfer")
const router = express.Router();

router.get("/" , (req,res)=>{
    res.json("This is accounts section")
})

router.get("/balance" , middlewareuser , balance )
router.post("/transfer" , middlewareuser , transfer)


module.exports = router ;