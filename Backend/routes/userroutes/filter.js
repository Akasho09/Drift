const {User} = require("../../db/dbc")
async function filter (req,res) {
const input = req.query.filter;
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
   name : user.firstname + " " + user.lastname
})
)
})

}

module.exports = {
    filter
}