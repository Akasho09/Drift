const express = require ("express")
const router = express.Router();
const {signup} = require('./signup')
const {landing} = require ("./landing")
const {update} = require("./update")
const {signin} = require("./signin")
const {middlewareuser} = require ("../../middlewares/usermiddleware")
const {User} = require("../../db/dbc")

router.get("/landing" , landing)
router.post("/signup" ,  signup)
router.get("/signin" , signin)
router.put("/update"  , middlewareuser ,  update )
router.get("/filter" , )

module.exports = router ;