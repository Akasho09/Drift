const express = require ("express")
const router = express.Router();
const {signup} = require('./signup')
const {landing} = require ("./landing")

router.get("/landing" , landing)
router.post("/signup" ,  signup)

module.exports= router ;