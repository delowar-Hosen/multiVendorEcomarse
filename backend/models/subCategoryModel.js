const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subCategoryModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      default: "waiting",
      enum: ["waiting", "rejected", "approved"],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    updated: {
      type: Date,
    },
    created: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("subCategory", subCategoryModel);
