# Drift Backend API
A backend API built with Node.js, Express.js, MongoDB, and Zod for schema validation. The API supports JWT-based authentication, user management, and database operations using Mongoose.

# Prerequisites
Ensure the following tools are installed:
Node.js (v22.9.0+)
MongoDB (for development: MongoDB Atlas)
Homebrew (for macOS users)
Postman or any API testing tool.

Installation
- Clone the Repository
git clone https://github.com/username/drift.git
cd Backend
- Initialize the Project
npm init -y
- Install Dependencies
npm install 
# Configuration
1. MongoDB Setup (Using Atlas)
Create a MongoDB Atlas cluster and replace the connection string below in your code:

mongoose.connect(
  'Your MongoDB Connection String',
)
brew services start mongodb/brew/mongodb-community

2. JWT Configuration
Create a config.js file in the project’s root:
module.exports = {
  JWT_SECRET: 'your_secret_key_here',
};
# Usage
Start the Development Server
npm start
# Routes Overview
1. User Registration and Login
POST /user/signup
Create a new user and generate a JWT.

POST /user/signin
Authenticate a user.

2. User Account Management
PUT /account
Requires JWT in the header for authentication.
Example:
Authorization: Bearer <your_jwt_token>

POST /account/transfer
Transfers Money between 2 accounts.


1. npm create vite@latest
2. npm install


1. npm init -y
2. npm install mongoose
3. npm i cors
4. npm install jsonwebtoken
config.js for JWT_token
5. npm i nodemon
6. zod 
7. 