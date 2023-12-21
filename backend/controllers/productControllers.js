require("dotenv").config();
const productModels = require("../models/productModels");
const User = require("../models/user");
const variantModel = require("../models/variantModel");

exports.secureProduct = async (req, res, next) => {
  //   console.log(req.headers.authorization.split('@')[0]);
  let userId = req.headers.authorization.split("@")[1];
  let password = req.headers.authorization.split("@")[2];

  if (!req.headers.authorization) {
    return res.json({ error: "Unauthorised" });
  }

  let check = await User.find({ _id: userId });

  if (check.length > 0) {
    if (password == process.env.MERCHANT_SECRET_KEY) {
      if (check[0].role == "merchant") {
        next();
      }
    } else {
      return res.json({ error: "You are not able to add product" });
    }
  } else {
    return res.json({ error: "You are not able to add product" });
  }
};

exports.createProduct = async (req, res) => {
  const { name, description, store } = req.body;

  let product = new productModels({
    name,
    description,
    store,
  });

  product.save();
  res.json(product);
};

exports.createVariant = async (req, res) => {
  const { image, product, size, price, color, quantity, ram, storage } =
    req.body;

  let variant = new variantModel({
    image: `${process.env.IMAGE_URL}/uploads/${req.file.filename}`,
    product,
    price,
    color,
    quantity,
    ram,
    storage,
    size,
  });

  variant.save();
  res.json(variant);

  await productModels.findOneAndUpdate(
    { _id: variant.product },
    { $push: { variants: variant._id } },
    { new: true }
  );
};

exports.getProduct = async (req, res) => {
  try {
    const data = await productModels.find({}).populate("store");
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

exports.getVarient = async (req, res) => {
  try {
    const data = await variantModel.find({}).populate("product");
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};


exports.delateProduct = async (req, res) => {
  try {
    let data = await productModels.findByIdAndDelete(req.body.id);
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
