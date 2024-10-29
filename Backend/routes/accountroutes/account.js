const express = require("express");

const router = express.Router();

router.get("/" , (req,res)=>{
    res.json("This is accounts section")
})

module.exports = router ;