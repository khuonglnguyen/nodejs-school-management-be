const express = require("express");
const morgan = require("morgan");

const app = express();

// Middleware
app.use(morgan("dev"));

// Routes
// admin register
app.post("/api/v1/admins/register", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been registered",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin login
app.post("/api/v1/admins/register", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin has been loged",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// get all admins
app.get("/api/v1/admins", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "All admins",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// get single admin
app.get("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Single admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// update admin
app.put("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Updated admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// delete admin
app.delete("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Deleted admin",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin suspending teacher
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin suspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin unsuspending teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unsuspend teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin withdrawing teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin withdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin unwithdrawing teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unwithdraw teacher",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin publish exam result
app.put("/api/v1/admins/publish/exam/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin publish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

// admin unpublish exam result
app.put("/api/v1/admins/unpublish/exam/:id", (req, res) => {
  try {
    res.status(201).json({
      status: "success",
      data: "Admin unpublish exam",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
});

module.exports = app;
