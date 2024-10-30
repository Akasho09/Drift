const {User} = require("../../db/dbc")
async function filter (req,res) {
const input = req.query.filter || "";
try {
    const users = await User.find({
    $or : [ 
        { firstname : {
            "$regex" : input
        }},
        {lastname : {
            "$regex" : input
        }}
    ]
})
res.json({
    user : users.map( (user)=> ({
       username : user.username ,
       id : user._id ,
       name : user.firstname + " " + user.lastname
    })
    )
    })
}
catch(error) {
    console.log(error)
}
}

module.exports = {
    filter
}