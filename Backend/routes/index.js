const express = require("express");
const accountrouter = require("./account")
const router = express.Router() ;

router.get('account' , accountrouter)

module.exports = router;
