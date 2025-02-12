function validatePassword(password) {
  // My version of code

  // let result = false;
  // if (password.length >= 8 && password.length <= 12) result = true;
  // if (!/[A-Z]/.test(password)) return false;
  // if (!/[a-z]/.test(password)) return false;
  // if (!/[0-9]/.test(password)) return false;
  // return result;

  // Optimized version of code. This one is better
  return (
    password.length >= 8 &&
    password.length <= 12 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  );
}

module.exports = validatePassword;
