const express = require("express");
const { becomeMerchant, getStore } = require("../../controllers/merchantControllers");
const _ = express.Router();

_.post("/becomemerchant", becomeMerchant);
_.get("/getstore",  getStore);

module.exports = _;
