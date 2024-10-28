 # Add Guest account login option
  if (username === "Guest"){
        return  res.json({
              message : `Your Guest Account has been created `
          })
      }
          if(user.username==="Guest") {
        return  res.json({
            message : `Your Guest Account already Exists `
        })
    }