import React, { useEffect, useState } from "react";
import { getDataService, postDataService } from "../services/data.services";
import Card from "../svg/Card";
import luhnValidation from "../utils/luhnValidation";

function Modal({ setShowModal }) {
  const [data, setData] = useState({});
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [postCode, setPostCode] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [luhnValid, setLuhnValid] = useState(true);

  const handleAddress1Change = (e) => setAddress1(e.target.value);
  const handleAddress2Change = (e) => setAddress2(e.target.value);
  const handleStateChange = (e) => setState(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handlePostCodeChange = (e) => setPostCode(e.target.value);
  const handleCardNumChange = (e) => setCardNum(e.target.value);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getDataService();
      const randomData =
        response.data[Math.floor(Math.random() * response.data.length)];
      setData(randomData);
      setAddress1(randomData.address_one);
      setAddress2(randomData.address_two);
      setState(randomData.state);
      setPostCode(randomData.post_code);
    } catch (error) {
      throw error;
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const isValid = luhnValidation(cardNum);
    setLuhnValid(isValid);

    if (!isValid) {
      return;
    }

    const newData = {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      address_one: address1,
      address_two: address2,
      state,
      country,
      post_code: postCode,
    };

    try {
      await postDataService(newData);
      setShowModal(false);
    } catch (error) {
      throw error;
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <div className="modal-window">
      <div className="modal-box">
        <h2>Update payment method</h2>
        <form onSubmit={handleUpdate}>
          <div className={luhnValid ? null : "error-box"}>
            {/* Card input */}
            <div
              className={
                luhnValid
                  ? "card-input-box input"
                  : "card-input-box input invalid-card"
              }
            >
              <div className="card-box-1 flex">
                <Card />
                <input
                  className="inner-input"
                  type="number"
                  name="card"
                  id="card"
                  placeholder="Card number"
                  onChange={handleCardNumChange}
                />
              </div>
              <div className="card-box-2">
                <input
                  className="inner-input exp-input"
                  type="number"
                  name="exp"
                  id="exp"
                  placeholder="MM/YY"
                />
                <input
                  className="inner-input cvv-input"
                  type="number"
                  name="ccv"
                  id="ccv"
                  placeholder="CCV"
                />
              </div>
            </div>

            {/* Error message */}
            {luhnValid ? null : (
              <div className="error-box-bg">
                <p className="error-message">Card number incorrect</p>
              </div>
            )}
          </div>
          {/* Address 1 input */}
          <div className="column">
            <label htmlFor="address1">Address line 1</label>
            <input
              className="input"
              type="text"
              name="address1"
              id="address1"
              placeholder="e.g. 123 Fake St"
              onChange={handleAddress1Change}
              value={address1}
            />
          </div>

          {/* Address 2 input */}
          <div className="column">
            <label htmlFor="address1">Address line 2</label>
            <input
              className="input"
              type="text"
              name="address1"
              id="address1"
              placeholder="e.g. 123 Fake St"
              onChange={handleAddress2Change}
              value={address2}
            />
          </div>

          {/* Country input */}
          <div className="column">
            <label htmlFor="country">Country</label>
            <select className="input select" onChange={handleCountryChange}>
              <option value="" disabled selected>
                Select your Country
              </option>
              <option value="countryA">Country A</option>
              <option value="countryB">Country B</option>
              <option value="countryC">Country C</option>
              <option value="countryD">Country D</option>
            </select>
          </div>

          {/* State input */}
          <div className="flex combo-inputs">
            <div className="column">
              <label htmlFor="state">
                State <span className="optional-text">(optional)</span>{" "}
              </label>
              <input
                className="input combo-input-1"
                type="text"
                name="state"
                id="state"
                placeholder="e.g. Middlesex"
                onChange={handleStateChange}
                value={state}
              />
            </div>

            {/* Post Code input */}
            <div className="column">
              <label htmlFor="postcode">Post Code</label>
              <input
                className="input combo-input-2"
                type="text"
                name="postcode"
                id="postcode"
                placeholder="e.g. Middlesex"
                onChange={handlePostCodeChange}
                value={postCode}
              />
            </div>
          </div>
          <div className="flex btns-box">
            <button className="btn secondary-btn" onClick={handleCancel}>
              Cancel
            </button>
            <button className="btn primary-btn">Update</button>
          </div>
        </form>
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/stripe.png"}
          alt="Powered by Stripe"
        />
      </div>
    </div>
  );
}

export default Modal;
