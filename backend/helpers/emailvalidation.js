const emailValidation = async (email) => {
  const check =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return check.test(email);
};

module.exports = emailValidation;
