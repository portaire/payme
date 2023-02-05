export const formatCardNumber = (value) => {
  const v = value
    .toString()
    .replace(/\s+/g, "")
    .replace(/[^0-9]/gi, "")
    .substr(0, 16);
  const parts = [];

  for (let i = 0; i < v.length; i += 4) {
    parts.push(v.substr(i, 4));
  }

  return parts.length > 1 ? parts.join(" ") : value;
};

export const formatExpireDate = (value) => {
  const innerValue = value.toString();
  const expDateFormatter =
    innerValue.replace(/\//g, "").substring(0, 2) +
    (innerValue.length > 2 ? "/" : "") +
    innerValue.replace(/\//g, "").substring(2, 4);

  return expDateFormatter;
};
