const express = require('express');
const  {User} = require('../db/dbc')
const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")

export function middlewareuser(req,res,next) {
const authHeader = req.headers.authorization ;
if(!authHeader || !authHeader.startsWith('Bearer ')) {
    res.json ({
        message : "Please send valid Auth token"
    })
}
try {
const token = authHeader.split(' ')[1];
const user = jwt.verify(token,JWT_SECRET);
if(user.userId) {
    req.userId=user.userId;
    next();
}
else {
    return res.status(403).json ({
        message : " Invalid Authorization "
    })
}
}
catch(error) {
    res.status(403).json ({
        message : "Try and Catch error" ,
        error : error.message
    })
}
}