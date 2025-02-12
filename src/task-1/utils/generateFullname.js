function generateFullname(firstName, lastName) {
  if (!firstName || !lastName) return null;
  return `${firstName} ${lastName}`;
}

module.exports = generateFullname;
