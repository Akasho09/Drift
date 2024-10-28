# connect ECONNREFUSED 127.0.0.1:27017, connect ECONNREFUSED ::1:27017
brew services start mongodb/brew/mongodb-community

# router.use("/account" , accountrouter)
NOT router.get("/account" , accountrouter)

# 
> Users/akashmalik/Desktop/Drift/Backend/routes/user.js:11
    const username = req.body.username || "Guest";
                              ^
TypeError: Cannot read properties of undefined (reading 'username')
    at /Users/akashmalik/Desktop/Drift/Backend/routes/user.js:11:31
    at Layer.handle [as handle_request] (/Users/akashmalik/node_modules/express/lib/router/layer.js:95:5)
    at next (/Users/akashmalik/node_modules/express/lib/router/route.js:149:13)
    at Route.dispatch (/Users/akashmalik/node_modules/express/lib/router/route.js:119:3)
    at Layer.handle [as handle_request] (/Users/akashmalik/node_modules/express/lib/router/layer.js:95:5)
    at /Users/akashmalik/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/Users/akashmalik/node_modules/express/lib/router/index.js:346:12)
    at next (/Users/akashmalik/node_modules/express/lib/router/index.js:280:10)
    at Function.handle (/Users/akashmalik/node_modules/express/lib/router/index.js:175:3)
    at router (/Users/akashmalik/node_modules/express/lib/router/index.js:47:12)
---{app.use(mainrouter)  should be placed after  app.use(bodyparser.json());}

