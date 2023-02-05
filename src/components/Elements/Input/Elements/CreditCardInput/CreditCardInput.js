import css from "../../Input.module.css";
import { formatCardNumber, formatExpireDate } from "../../Input.logic";
import React from "react";
import useCreditCardInput from "./CreditCardInput.hook";

const CreditCardInput = (props) => {
  const {
    cardNumber,
    setCardNumber,
    cardExp,
    setCardExp,
    ccv,
    setCcv,
    cardNumberError,
  } = props;

  const { setInputClicked } = useCreditCardInput(props);

  return (
    <div
      className={css.inputs__creditCard__wrapper}
      onClick={() => setInputClicked(true)}
    >
      <div
        className={css.inputs__creditCard}
        data-error={cardNumberError !== ""}
      >
        <div className={css.inputs__creditCard__cardNumber}>
          <img src={"/card.svg"} alt={"credit card icon"} />
          <label className={css.input__label}>
            <input
              type={"text"}
              className={css.input__creditCard}
              value={formatCardNumber(cardNumber)}
              onChange={(e) => setCardNumber(e.target.value)}
              name={"credit_card_number"}
              placeholder={"Card number"}
              maxLength={19}
            />
          </label>
        </div>
        <div className={css.input__input__creditCard__exp}>
          <label className={css.input__label}>
            <input
              type={"text"}
              name={"credit_card_exp"}
              className={css.input__creditCard}
              placeholder={"MM / YY"}
              onChange={(e) => setCardExp(e.target.value)}
              value={formatExpireDate(cardExp)}
              maxLength={5}
            />
          </label>
          <label className={css.input__label}>
            <input
              type={"password"}
              className={css.input__creditCard}
              data-mask="000"
              placeholder="CVV"
              maxLength="3"
              pattern="[0-9][0-9][0-9]"
              value={ccv}
              onChange={(e) => setCcv(e.target.value)}
            />
          </label>
        </div>
      </div>
      {cardNumberError && (
        <div className={css.inputs__creditCard__error}>{cardNumberError}</div>
      )}
    </div>
  );
};

export default CreditCardInput;
