# DockerFile
Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers. The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.

# Cors 
CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. However, in many cases (e.g., APIs, frontend-backend communication), you need to allow such requests. In Express.js, you can handle CORS easily by configuring the headers appropriately.
const cors = require('cors');
app.use(cors());

