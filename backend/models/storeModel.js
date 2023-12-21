const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeModel = new Schema(
  {
    storeName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "waiting",
      enum: ["waiting", "rejected", "approved"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    officeMail: {
      type: String,
      required: true,
    },
    officePhone: {
      type: String,
      required: true,
    },
    officeAddress: {
      type: String,
      required: true,
    },
    produts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Store", storeModel);
