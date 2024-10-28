# connect ECONNREFUSED 127.0.0.1:27017, connect ECONNREFUSED ::1:27017
brew services start mongodb/brew/mongodb-community

# router.use("/account" , accountrouter)
NOT router.get("/account" , accountrouter)

# {app.use(mainrouter)  should be placed after  app.use(bodyparser.json());}
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

    })
# use return and { try and catches to wrap the whole code } to handle errors
node:_http_outgoing:699
    throw new ERR_HTTP_HEADERS_SENT('set');
          ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:699:11)
    at ServerResponse.header (/Users/akashmalik/node_modules/express/lib/response.js:794:10)
    at ServerResponse.send (/Users/akashmalik/node_modules/express/lib/response.js:174:12)
    at ServerResponse.json (/Users/akashmalik/node_modules/express/lib/response.js:278:15)
    at /Users/akashmalik/Desktop/Drift/Backend/routes/user.js:35:21
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5) {
  code: 'ERR_HTTP_HEADERS_SENT'
}

Node.js v22.9.0
Example : 
if(user) {
  `return`  res.json({
        message : `User already exists name : ${user.firstname }  ${user.lastname}`
    }) }

