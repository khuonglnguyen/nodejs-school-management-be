const mongoose = require("mongoose");
const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      defaule: "Admin",
    },
  },
  {
    timestamps: true,
  }
);

// model
const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
