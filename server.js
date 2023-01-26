const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 2020;

// Middleware
app.use(morgan("dev"));

// server
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
