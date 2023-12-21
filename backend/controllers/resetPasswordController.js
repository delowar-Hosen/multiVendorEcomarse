const resetPasswordTemplate = require("../helpers/resetPasswordTemplate");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

const resetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    let findEmail = await User.find({ email });

    if (findEmail.length > 0) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "delowarhosen154@gmail.com", // generated ethereal user
          pass: "tsjbjptgwmlymcmn", // generated ethereal password
        },
      });

      let info = await transporter.sendMail({
        from: "delowarhosen154@gmail.com", // sender address
        to: email, // list of receivers
        subject: "Oreby Ecomarse Reset Password", // Subject line
        text: "Reset Password", // plain text body
        html: resetPasswordTemplate(email), // html body
      });

      res.json({ success: "Please Check Your Email For Confirmation Message" });
    } else {
      res.json({ error: "Email Not Found" });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const passwordChange = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password) {
     return res.json({ error: "Please Give A Password" });
    }
    let findEmail = await User.find({ email });

    if (findEmail.length > 0) {
      bcrypt.hash(password, 10, async (err, hash) => {
        await User.findOneAndUpdate(
          { email },
          { $set: { password: hash } },
          { new: true }
        );
      });
      setTimeout(() => {
        res.json({ success: "Reset Password Change SuccessFully" });
      }, 3000);
    } else {
      res.json({ error: "Email Not Found" });
    }
  } catch (error) {
    res.json(error.message);
  }
};
module.exports = { resetPasswordController, passwordChange };
