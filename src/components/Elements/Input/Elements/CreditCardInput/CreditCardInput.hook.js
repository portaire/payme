import { useEffect, useState } from "react";

const useCreditCardInput = (props) => {
  const { cardNumber, cardExp, setCardNumberError, ccv, formSubmitted } = props;
  const [inputClicked, setInputClicked] = useState(false);

  useEffect(() => {
    if (inputClicked || formSubmitted) {
      let innerCardNumber = cardNumber.replace(/\s/g, "");

      if (
        innerCardNumber.length < 16 ||
        cardExp === "" ||
        ccv === "" ||
        ccv.length < 3
      ) {
        setCardNumberError("Card number incorrect");
      } else {
        setCardNumberError("");
      }
    }
  }, [cardNumber, cardExp, ccv, formSubmitted]);

  return { inputClicked, setInputClicked };
};

export default useCreditCardInput;
