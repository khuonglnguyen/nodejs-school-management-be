const express = require("express");
const morgan = require("morgan");
const adminRouter = require('../routes/staff/adminRouter');

const app = express();

// Middleware
app.use(morgan("dev"));

// Admin Routes
app.use("/api/v1/admins", adminRouter);

module.exports = app;
