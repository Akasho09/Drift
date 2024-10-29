# DockerFile
Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.

# Cors 
CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. However, in many cases (e.g., APIs, frontend-backend communication), you need to allow such requests. In Express.js, you can handle CORS easily by configuring the headers appropriately.
const cors = require('cors');
app.use(cors());

# body-parser
Body-parser is a Node.js library that parses the body of an incoming HTTP request and makes the parsed data available as an object in the request object

# 1. import Statement
ES6 (ECMAScript 2015) syntax for module imports.
Used in JavaScript modules (ESM).
`Asynchronous` by nature, allowing for better optimization in modern bundlers

# 2. require() Statement
CommonJS syntax, used in older JavaScript or Node.js projects.
`Synchronous` by design (modules are loaded at runtime).

# search firstname and last name simultaneouly and partially
  $or : [ 
        { firstname : {
            "$regex" : input
        }},
        {lastname : {
            "$regex" : input
        }}
    ]

# Transtions 
const session = await mongoose.startSession() ;
session.startTransaction();
session.abortTranstion() ;
session.commitTranstion();