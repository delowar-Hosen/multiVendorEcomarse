const otpTemplate = (otp, email) => {
  return `<h2><a href="http://localhost:5173/otp?email=${email}?${otp}">Your OTP Is: ${otp}</a></h2>`;
};

module.exports = otpTemplate;
