const bcrypt = require("bcrypt");
const User = require("../models/user");
const otpTemplate = require("../helpers/otpTemplate");
const sendVerificationEmail = require("../helpers/sendVerificationEmail");
const aleaRNGFactory = require("number-generator/lib/aleaRNGFactory");
const emailValidation = require("../helpers/emailvalidation");
const nodemailer = require("nodemailer");
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "daydhtjqc",
  api_key: "965568774993167",
  api_secret: "r-Xcm92Ti5kMvzbiHp1CruHCeR4",
});

const registrationController = async (req, res) => {
  try {
    const { email, phoneNumber, fullName, upload, password } = req.body;

    let file = await cloudinary.uploader
      .upload(upload)
      .then((result) => result);

    if (!fullName) {
      return res.json({ error: "You Must Give A Lastname" });
    }

    if (!email) {
      return res.json({ error: "You Must Give An Email" });
    }
    if (!emailValidation(email)) {
      return res.json({ error: "Give Valid Email Address" });
    }
    if (!password) {
      return res.json({ error: "You Must Give A Password" });
    }

    let check = await User.find({ email: email });
    if (check.length > 0) {
      return res.json({ error: "Email already exists" });
    }

    bcrypt.hash(password, 10, async (err, hash) => {
      const user = new User({
        email,
        phoneNumber,
        fullName,
        password: hash,
        upload: file.url,
      });
      user.save();

      const randomNumber = aleaRNGFactory(new Date());
      const otp = randomNumber.uInt32().toString().substring(0, 4);
      // sendVerificationEmail(email, otp, otpTemplate);
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
        subject: "Oreby Ecomarse Verification Link", // Subject line
        text: "Hello world?", // plain text body
        html: otpTemplate(otp, email), // html body
      });
      await User.findOneAndUpdate(
        { email },
        { $set: { otpNumber: otp } },
        { new: true }
      );

      const minute = 5;
      const miliseceond = minute * 60 * 1000;
      setTimeout(async () => {
        await User.findOneAndUpdate(
          { email },
          { $unset: { otpNumber: "" } },
          { new: true }
        );
      }, miliseceond);
      res.json({
        email: user.email,
        firstName: user.firstName,
        last: user.lastName,
        success: "Registration is successfully,Check your email for Otp code",
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = registrationController;
