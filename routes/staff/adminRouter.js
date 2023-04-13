const express = require("express");

const adminRouter = express.Router();

// admin register
adminRouter.post("/register", (req, res) => {
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
adminRouter.post("/login", (req, res) => {
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

// get all
adminRouter.get("/", (req, res) => {
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

// get single
adminRouter.get("/:id", (req, res) => {
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
adminRouter.put("/:id", (req, res) => {
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

// detele admin
adminRouter.delete("/:id", (req, res) => {
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
adminRouter.put("/suspend/teacher/:id", (req, res) => {
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
adminRouter.put("/unsuspend/teacher/:id", (req, res) => {
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
adminRouter.put("/withdraw/teacher/:id", (req, res) => {
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
adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
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
adminRouter.put("/publish/exam/:id", (req, res) => {
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
adminRouter.put("/unpublish/exam/:id", (req, res) => {
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

module.exports = adminRouter;
