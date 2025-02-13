function validateDiscountCalculation(hasMembership, spend) {
  return hasMembership ? (spend > 100 ? 15 : 10) : spend > 100 ? 5 : 0;
}

module.exports = validateDiscountCalculation;
