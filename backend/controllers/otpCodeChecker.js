const User = require("../models/user");

const otpCodeChecker = async (req, res) => {
  try {
    const { email, otp } = req.body;

    let findEmail = await User.find({ email });

    if (findEmail.length > 0) {
      if (findEmail[0].otpNumber == otp) {
        res.json({ success: "Otp Match" });
        await User.findOneAndUpdate(
          { email },
          { $unset: { otpNumber: "" } },
          { new: true }
        );
      } else {
        res.json({ error: "Otp Dose not Match" });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = otpCodeChecker;
