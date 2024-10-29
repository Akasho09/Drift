const express = require("express");
const accountrouter = require("./accountroutes")
const userrouter = require("./userroutes/index")
const {filter} = require("./userroutes/filter")
const router = express.Router() ;

router.use("/account" , accountrouter)
router.use("/user" , userrouter);
router.get("/filter" , filter)

module.exports = router;
