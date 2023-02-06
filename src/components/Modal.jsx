import React, { useEffect, useState } from "react";
import getDataService from "../services/data.services";
import Card from "../svg/Card";

function Modal({ setShowModal }) {
  const [data, setData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getDataService();
      const randomData =
        response.data[Math.floor(Math.random() * response.data.length)];
      setData(randomData);
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
        <form>
          {/* Card input */}
          <div className="card-input-box input">
            <div className="card-box-1 flex">
              <Card />
              <input
                className="inner-input"
                type="number"
                name="card"
                id="card"
                placeholder="Card number"
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

          {/* Address 1 input */}
          <div className="column">
            <label htmlFor="address1">Address line 1</label>
            <input
              className="input"
              type="text"
              name="address1"
              id="address1"
              placeholder="e.g. 123 Fake St"
              value={data.address_one}
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
              value={data.address_two}
            />
          </div>

          {/* Country input */}
          <div className="column">
            <label htmlFor="country">Country</label>
            <select className="input select">
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
                value={data.state}
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
                value={data.post_code}
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
