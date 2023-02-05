import css from "./UpdatePaymentForm.module.css";
import Input from "../Input";
import React from "react";
import Button from "../Button";
import useUpdatePaymentForm from "./UpdatePaymentForm.hook";
import CreditCardInput from "../Input/Elements/CreditCardInput/CreditCardInput";
import SelectInput from "../Input/Elements/SelectInput";
import { countries } from "./UpdatePaymentForm.logic";

const UpdatePaymentForm = (props) => {
  const { data, setModalOpen } = props;
  const {
    cardNumber,
    addressOne,
    addressTwo,
    state,
    postCode,
    setCardNumber,
    setAddressOne,
    setAddressTwo,
    setCountry,
    setState,
    setPostCode,
    cardExp,
    setCardExp,
    ccv,
    setCcv,
    country,
    onSubmit,
    cardNumberError,
    setCardNumberError,
    dataSaved,
    formSubmitted,
    loading,
  } = useUpdatePaymentForm(data);

  return (
    <form className={css.updatePaymentForm}>
      <CreditCardInput
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
        cardExp={cardExp}
        setCardExp={setCardExp}
        ccv={ccv}
        setCcv={setCcv}
        cardNumberError={cardNumberError}
        setCardNumberError={setCardNumberError}
        formSubmitted={formSubmitted}
      />
      <Input
        type={"text"}
        name={"address_one"}
        title={"Address line 1"}
        value={addressOne}
        onChange={setAddressOne}
      />
      <Input
        type={"text"}
        name={"address_two"}
        title={"Address line 2"}
        value={addressTwo}
        onChange={setAddressTwo}
      />

      <SelectInput
        options={countries}
        title={"Country"}
        onChange={setCountry}
        value={country}
      />

      <div className={css.updatePaymentForm__inputs}>
        <div className={css.updatePaymentForm__input}>
          <Input
            type={"text"}
            name={"state"}
            title={"State"}
            value={state}
            onChange={setState}
          />
        </div>
        <div className={css.updatePaymentForm__input}>
          <Input
            type={"text"}
            name={"post_code"}
            title={"Post code"}
            value={postCode}
            onChange={setPostCode}
          />
        </div>
      </div>

      <div className={css.updatePaymentForm__buttons}>
        <div className={css.updatePaymentForm__button1}>
          <Button
            label={"Cancel"}
            type={"button"}
            buttonStyle={"frame"}
            onClick={() => setModalOpen(false)}
          />
        </div>
        <div className={css.updatePaymentForm__button2}>
          <Button label={"Update"} type={"submit"} onClick={onSubmit} />
        </div>
      </div>
      {loading && (
        <span className={css.updatePaymentForm__dataSaved}>Saving data...</span>
      )}

      {dataSaved && (
        <span className={css.updatePaymentForm__dataSaved}>
          The data has been saved.
        </span>
      )}

      <img
        src={"/powered-by-stripe.svg"}
        alt={"Powered by stripe"}
        style={{ margin: "auto" }}
      />
    </form>
  );
};

export default UpdatePaymentForm;
