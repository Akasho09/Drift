const express = require ("express")
const router = express.Router();
const {signup} = require('./signup')
const {landing} = require ("./landing")
const {update} = require("./update")
const {signin} = require("./signin")
const {middlewareuser} = require ("../../middlewares/usermiddleware")
const {filter} = require("./filter")
const {User} = require("../../db/dbc")

router.get("/landing" , landing)
router.post("/signup" ,  signup)
router.post("/signin" , signin)
router.put("/update"  , middlewareuser ,  update )
router.get("/filter" , middlewareuser , filter)

module.exports = router ;