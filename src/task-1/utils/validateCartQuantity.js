function validateCartQuantity(quantity) {
  // My version of code

  //   if (typeof quantity !== "number") return false;
  //   if (quantity >= 0) return true;
  //   return false;

  // Optimized version

  return typeof quantity === "number" && quantity > 0;
}

module.exports = validateCartQuantity;
