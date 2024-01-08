const emailValidation = require("../helpers/emailvalidation");
const bcrypt = require("bcrypt");
const User = require("../models/user");

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const check = emailValidation(email);

    if (!email) {
      return res.json({ error: "You Must Give An Email" });
    } else if (!password) {
      return res.json({ error: "You Must Give Password" });
    } else if (check == false) {
      return res.json({ error: "Give Valid Email Address" });
    } else {
      let isEmail = await User.find({ email });
      if (isEmail.length > 0) {
        bcrypt.compare(password, isEmail[0].password).then(function (result) {
          if (result) {
            res.json({
              email: isEmail[0].email,
              role: isEmail[0].role,
              verified: isEmail[0].verified,
              fullname: isEmail[0].fullName,
              success: "Login is successfully",
            });
          } else {
            res.json({ error: "Give Correct Password" });
          }
        });
      } else {
        res.json({ error: "Email Not Found" });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = loginController;
