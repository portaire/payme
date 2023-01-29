import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// COUNTRIES
const countries = ["United Kingdom", "France", "Germany", "Australia", "USA"];

const PaymentForm = ({ handleClose }) => {
  // DROPDOWN STATE
  const [country, setCountry] = React.useState("United Kingdom");

  // PAYMENT STATES
  const [paymentDetails, setPayementDetails] = useState([]);
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [state, setState] = useState("");
  const [postCode, setPostCode] = useState("");

  // DATE PICKER STATES
  const [date, setDate] = useState("");

  // CVC STATE
  const [cvc, setCvc] = useState("");

  // ERROR MESSAGE
  const [error, setError] = useState("");

  // FETCHING
  useEffect(() => {
    const func = async () => {
      const res = await fetch("https://portaireapi.herokuapp.com/test/payment");
      const data = await res.json();
      setAddressOne(data[0].address_one);
      setAddressTwo(data[0].address_two);
      setState(data[0].state);
      setPostCode(data[0].post_code);
      setPayementDetails(data);
    };

    func();
  }, []);

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  function validateWithLuhn(input) {
    let sum = 0;
    let digit = 0;
    let addend = 0;
    let timesTwo = false;

    // Work from right to left
    for (let i = input.length - 1; i >= 0; i--) {
      digit = parseInt(input.charAt(i), 10);

      // Double every other digit
      if (timesTwo) {
        addend = digit * 2;
        if (addend > 9) {
          addend -= 9;
        }
      } else {
        addend = digit;
      }

      sum += addend;
      timesTwo = !timesTwo;
    }

    // Return true if sum is divisible by 10, false otherwise
    return sum % 10 === 0;
  }

  // POST REQUEST
  const handlePost = async () => {
    const res = await fetch("https://portaireapi.herokuapp.com/test/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _id: paymentDetails[0]._id,
        email: "john@doe.com",
        first_name: "Sherlock",
        last_name: "Holmes",
        address_one: addressOne,
        address_two: addressTwo,
        state: state,
        post_code: postCode,
        __v: 0,
      }),
    });

    const result = await res.json();
    console.log("HERE", result);
  };

  return (
    <div className="w-[100%] lg:w-[410px] bg-white p-[20px] lg:p-[30px] rounded-[10px] shadow-lg">
      <div className="flex flex-col gap-[20px]">
        {/* ##### STRIPE CARD INPUT */}
        <div>
          <label
            className="text-[20px] text-[#111111] font-[500]"
            htmlFor="payment-method"
          >
            Update payment method
          </label>
          <div
            className={`lg:w-[350px] px-[8px] py-[11px] border rounded-t-[3px] mt-[15px] ${
              error && "border-red-500"
            }`}
          >
            {/* ### CARD INPUT  */}
            <div className="w-[100%] lg:w-[100%] flex">
              <img src="card.png" alt="icon" />
              <input
                onChange={(e) => {
                  const value = e.target.value;
                  const isValid = validateWithLuhn(value);
                  if (isValid) {
                    setError("");
                  } else {
                    setError("Card number incorrect");
                  }
                }}
                className="w-[100%] lg:flex-grow text-[14px] px-[8px] font-[500] focus:outline-none"
                name="payment-method"
                id="payment-method"
                type="number"
                placeholder="Card number"
              />
              {/* ## DATE PICKER */}
              <input
                className="max-w-[55px] mr-[.5rem] focus:outline-none"
                placeholder="MM/YY"
                type="text"
                value={
                  date.length > 2
                    ? `${date.slice(0, 2) + "/" + date.slice(2, 4)}`
                    : date
                }
                onChange={(e) => {
                  const value = e.target.value.replace("/", "");
                  const pattern = /^[0-9]*$/;
                  const result = pattern.test(value);
                  if (result) {
                    setDate(value);
                  }
                }}
              />
              {/* ## CVC */}
              <input
                value={cvc}
                className="max-w-[40px] focus:outline-none"
                type="number"
                placeholder="CVC"
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.length < 4) {
                    setCvc(value);
                  }
                }}
              />
            </div>
          </div>
          {/* %%% SHOWING ERROR */}
          <div className="bg-[#E52727] text-white px-[1rem] text-[12px] tracking-wider rounded-b-[10px]">
            <span>{error}</span>
          </div>
        </div>

        {/* ##### ADDRESS 1 */}
        <div className="flex flex-col">
          <label className="text-[14px] font-[500]" htmlFor="addressOne">
            Address line 1
          </label>
          <input
            onChange={(e) => {
              const value = e.target.value;
              setAddressOne(value);
            }}
            value={addressOne}
            className="px-[15px] h-[50px] rounded-[3px] border focus:border-black focus:outline-none"
            placeholder="e.g. 123 Fake St"
            name="addressOne"
            id="addressOne"
            type="text"
          />
        </div>

        {/* ##### ADDRESS 2 */}
        <div className="flex flex-col">
          <label className="text-[14px] font-[500]" htmlFor="addressTwo">
            Address line 2
          </label>
          <input
            onChange={(e) => {
              const value = e.target.value;
              setAddressTwo(value);
            }}
            value={addressTwo}
            className="px-[15px] h-[50px] rounded-[3px] border focus:border-black focus:outline-none"
            placeholder="e.g. 123 Fake St"
            name="addressTwo"
            id="addressTwo"
            type="text"
          />
        </div>

        {/* ##### COUNTRY */}
        <div>
          <FormControl className="w-[100%] h-[50px]">
            <Select
              value={country}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              IconComponent={FaAngleDown}
            >
              <div className="flex items-center px-[1rem]">
                <input
                  className="flex-grow py-[8px] pr-[8px] focus:outline-none"
                  type="text"
                  placeholder="Search here"
                />
                <span className="text-[1.1rem]">
                  <TbSearch />
                </span>
              </div>
              {countries?.map((el) => (
                <MenuItem key={countries?.indexOf(el)} value={el}>
                  {el}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* ###### STATE & POST */}
        <div className="w-[100%] flex">
          {/* ### STATE */}
          <div className="w-[100%] flex flex-col">
            <label className="text-[14px] font-[500]" htmlFor="state">
              State <span className="text-[#D4D4D4]">(optional)</span>
            </label>
            <input
              value={state}
              onChange={(e) => {
                const value = e.target.value;
                setState(value);
              }}
              className="w-[100%] px-[15px] h-[50px] rounded-l-[3px] border focus:border-black focus:outline-none"
              placeholder="e.g. Middlesex"
              name="state"
              id="state"
              type="text"
            />
          </div>
          {/* ### POST */}
          <div className="w-[100%] flex flex-col">
            <label className="text-[14px] font-[500]" htmlFor="postCode">
              Post Code
            </label>
            <input
              value={postCode}
              onChange={(e) => {
                const value = e.target.value;
                setPostCode(value);
              }}
              className="w-[100%] px-[15px] h-[50px] rounded-r-[3px] border focus:border-black focus:outline-none"
              placeholder="e.g. W11 1NS"
              name="postCode"
              id="postCode"
              type="text"
            />
          </div>
        </div>

        {/* ##### BOTTOM BUTTONS */}
        <div className="flex gap-[9px]">
          <button
            onClick={handleClose}
            className="w-[50%] h-[40px] rounded-[3px] font-[600] border border-black"
          >
            Cancel
          </button>
          <button
            onClick={handlePost}
            className="w-[50%] h-[40px] rounded-[3px] font-[600] bg-black text-white"
          >
            Update
          </button>
        </div>

        {/* ##### BOTTOM STRIPE TEXT */}
        <div className="flex justify-center">
          <img src="stripe.png" alt="stripe" />
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
