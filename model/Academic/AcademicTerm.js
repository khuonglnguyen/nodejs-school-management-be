const mongoose = require("mongoose");
const { Schema } = mongoose;

const academicTermSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: Date,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// model
const AcademicTerm = mongoose.model("AcademicTerm", academicTermSchema);

module.exports = AcademicTerm;
