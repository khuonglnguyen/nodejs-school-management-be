require("dotenv").config();
const http = require("http");
require("./config/dbConnect")
const app = require("./app/app");

// Port
const PORT = process.env.PORT || 2020;

// Server
const server=http.createServer(app)
server.listen(PORT, console.log(`Server is running on port ${PORT}`));