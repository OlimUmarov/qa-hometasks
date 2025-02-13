function checkSortOrder(arr) {
  if (!Array.isArray(arr)) throw new Error("Expected array!");

  return arr.sort((a, b) => a - b);
}

module.exports = checkSortOrder;
