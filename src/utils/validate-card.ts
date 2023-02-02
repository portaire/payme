export const validateCard = (digits: string, minLength = 16) => {
  const noSpaces = digits.replace(/\s/g, '');

  if (noSpaces.length < minLength) {
    return false;
  }

  let even = false; // we start from the end char of the string - and we want to double every second digit (besides the initial, because it's our check digit)
  let checkSum = 0;

  for (let i = noSpaces.length - 1; i >= 0; i--) {
    let currentDigit = parseInt(noSpaces.charAt(i), 10);

    if (even) {
      const doubled = currentDigit * 2;
      currentDigit = doubled > 9 ? doubled - 9 : doubled; // if doubled is greater than 9 i.e. 12 subtracting 9 will give us the same result as adding digits -> 1 + 2
    }

    checkSum += currentDigit;
    even = !even;
  }

  return checkSum % 10 === 0;
};
