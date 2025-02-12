function validateLogin(username, password) {
  if (!username || !password) return null;

  const validUserName = "roman";
  const validPassword = "malkin123";

  if (validUserName === username && validPassword === password) {
    return { id: 1, token: "romanmalkin123" };
  }

  return null;
}

module.exports = validateLogin;
