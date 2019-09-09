// practice callback

const convertFromEur = (amount, curr, getFromEur) => {
  switch (curr) {
    case "JPY":
      return getFromEur(amount);
    case "AUD":
      return getFromEur(amount);
    case "CHF":
      return getFromEur(amount);
    default:
      return "The requested currency is not available. Please enter JPY, AUD or CHF";
  }
};

const getJpyFromEur = amount => {
  // 1 EUR = 116.402 JPY
  const rate = 116.402;
  return (amount * rate).toFixed(2);
};

const getAudFromEur = amount => {
  // 1 EUR = 1.62072 AUD
  const rate = 1.62072;
  return (amount * rate).toFixed(2);
};

const getChfFromEur = amount => {
  // 1 EUR = 1.08329 CHF
  const rate = 1.08329;
  return (amount * rate).toFixed(2);
};

console.log(convertFromEur(105, "JPY", getJpyFromEur));
console.log(convertFromEur(105, "AUD", getAudFromEur));
console.log(convertFromEur(105, "CHF", getChfFromEur));
