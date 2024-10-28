const express = require("express");
const accountrouter = require("./account")
const userrouter = require("./userroutes/index")
const router = express.Router() ;

router.use("/account" , accountrouter)
router.use("/user" , userrouter);

module.exports = router;
