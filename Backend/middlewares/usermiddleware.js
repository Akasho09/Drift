const jwt = require("jsonwebtoken")
const JWT_SECRET = require("../config")

async function middlewareuser(req,res,next) {
const authHeader = req.headers.authorization ;
if(!authHeader || !authHeader.startsWith('Bearer ')) {
   return res.json ({
        message : "Please send valid Auth token"
    })
}
try {
const token = authHeader.split(' ')[1];
const user = jwt.verify(token,JWT_SECRET);
console.log(user.userId)
if(user) {
    req.userId=user.userId;
   return next();
}
else {
    return res.status(403).json ({
        message : " Invalid Authorization "
    })
}
}
catch(error) {
   return res.status(403).json ({
        message : "Try and Catch error" ,
        error : error.message
    })
}
}

module.exports = {
    middlewareuser 
}