const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variantModel = new Schema(
  {
    image: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    ram: {
      type: String,
    },
    storage: {
      type: String,
    },
    quantity: {
      type: String,
    },
    price: {
      type: String,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Variant", variantModel);
