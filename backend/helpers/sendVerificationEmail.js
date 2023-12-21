const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, varify, template) => {
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
    html: template(varify), // html body
  });
};

module.exports = sendVerificationEmail;
