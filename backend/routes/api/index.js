const express = require("express");
const _ = express.Router();
const authRoute = require("./auth");
const categoryRoute = require("./category");
const merchantRoute = require("./merchant");
const productRoute = require("./product");

_.use("/auth", authRoute);
_.use("/category", categoryRoute);
_.use("/merchant", merchantRoute);
_.use("/product", productRoute);
module.exports = _;
