const express = require("express");
const accountrouter = require("./accountroutes/account")
const userrouter = require("./userroutes/index")
const {filter} = require("./filter")
const router = express.Router() ;

router.use("/account" , accountrouter)
router.use("/user" , userrouter);
router.get("/filter" , filter)

module.exports = router;
