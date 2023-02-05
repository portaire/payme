import { useEffect, useState } from "react";

const useUpdatePaymentForm = (data) => {
  const [cardNumber, setCardNumber] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [country, setCountry] = useState({
    value: "uk",
    label: "United Kingdom",
  });
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [ccv, setCcv] = useState("");

  const [cardNumberError, setCardNumberError] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [dataSaved, setDataSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (data) {
      setAddressOne(data[0].address_one);
      setAddressTwo(data[0].address_two);
      setState(data[0].state);
      setPostCode(data[0].post_code);
    }
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    let newData = [
      {
        ...data[0],
        address_one: addressOne,
        address_two: addressTwo,
        state: state,
        post_code: postCode,
        country: country,
        card_number: cardNumber.replace(/\s/g, ""),
        card_expiration: cardExp,
        ccv: ccv,
      },
    ];

    if (
      cardNumberError === "" &&
      addressOne !== "" &&
      addressTwo !== "" &&
      state !== "" &&
      postCode !== "" &&
      cardExp !== "" &&
      ccv !== ""
    ) {
      setLoading(true);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData[0]),
      };
      await fetch(
        "https://portaireapi.herokuapp.com/test/payment",
        requestOptions
      )
        .then(async (response) => {
          const data = await response.json();
          if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      setLoading(false);
      setDataSaved(true);
    }
  };
  return {
    cardNumber,
    addressOne,
    addressTwo,
    country,
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
    onSubmit,
    cardNumberError,
    setCardNumberError,
    dataSaved,
    formSubmitted,
    loading,
  };
};

export default useUpdatePaymentForm;
