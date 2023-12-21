const resetPasswordTemplate = (email) => {
  return `<h2><a href="http://localhost:5173/resetpassword?email=${email}">Reset Your Password</a></h2>`;
};

module.exports = resetPasswordTemplate;
