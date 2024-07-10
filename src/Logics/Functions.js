export const addCommasToNumber = (number) => {
  // Convert the number to a string
  let numStr = number.toString();

  // Split the number into parts before and after the decimal point (if any)
  let parts = numStr.split(".");
  let integerPart = parts[0];
  let decimalPart = parts.length > 1 ? "." + parts[1] : "";

  // Add commas to the integer part
  let integerWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Combine integer part with decimal part (if any)
  return integerWithCommas + decimalPart;
};

// export const increaseItemQuantity = () => {};
