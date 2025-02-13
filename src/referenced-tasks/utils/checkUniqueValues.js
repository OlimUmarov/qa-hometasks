function checkUniqueValues(arr) {
  if (!Array.isArray(arr)) throw new Error("Expected array!");

  return new Set(arr).size === arr.length;
}

module.exports = checkUniqueValues;
