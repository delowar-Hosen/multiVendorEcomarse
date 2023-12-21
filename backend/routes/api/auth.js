const express = require("express");
const registrationController = require("../../controllers/registrationController");
const loginController = require("../../controllers/loginController");
const otpCodeChecker = require("../../controllers/otpCodeChecker");
const { merchantStatus } = require("../../controllers/merchantControllers");
const {resetPasswordController,passwordChange} = require("../../controllers/resetPasswordController");
const _ = express.Router();

_.post("/registration", registrationController);
_.post("/login", loginController);
_.post("/otpcheck", otpCodeChecker);
_.post("/merchantstatus", merchantStatus);
_.post("/resetpassword", resetPasswordController);
_.post("/changepassword", passwordChange);

module.exports = _;
