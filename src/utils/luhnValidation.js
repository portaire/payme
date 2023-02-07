function luhnValidation(cardNumber) {
  let totalDigits = cardNumber.length;

  let sum = 0;
  let isSecond = false;
  for (let i = totalDigits - 1; i >= 0; i--) {
    let d = cardNumber[i].charCodeAt() - "0".charCodeAt();

    if (isSecond === true) d = d * 2;

    sum += parseInt(d / 10, 10);
    sum += d % 10;

    isSecond = !isSecond;
  }
  return sum % 10 === 0;
}

export default luhnValidation;
