import React, { useState } from "react";
import Modal from "react-modal";

const NewClientPopup = (props) => {
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [addrErr, setAddrErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);
  const [pcErr, setPcErr] = useState(false);

  const changeNameHandler = (e) => setName(e.target.value);
  const changeAddressHandler = (e) => setAddr(e.target.value);
  const changeCityHandler = (e) => setCity(e.target.value);
  const changePostalCodeHandler = (e) => setPostalCode(e.target.value);
  const changeCountryHandler = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    checkValidity();

    if (!nameErr && !cityErr && !pcErr && !countryErr && !addrErr) {
      const body = {
        name: name,
        address: addr,
        city: city,
        countryId: country,
        postalCode: postalCode,
      };
      props.createClient(body);
    }
  };

  const checkValidity = () => {
    resetErrors();

    if (name === "") {
      setNameErr(true);
    }
    if (addr === "") {
      setAddrErr(true);
    }
    if (city === "") {
      setCityErr(true);
    }
    if (postalCode === "") {
      setPcErr(true);
    }
    if (country === "") {
      setCountryErr(true);
    }
  };

  const modalClosed = () => {
    props.setModalIsOpen(false);
    resetErrors();
  };

  const resetErrors = () => {
    setNameErr(false);
    setAddrErr(false);
    setCityErr(false);
    setPcErr(false);
    setCountryErr(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={modalClosed}
        closeTimeoutMS={200}
        className="new-member-inner"
        shouldFocusAfterRender={false}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <h2>Create new client</h2>
        <form onSubmit={submitHandler}>
          <ul className="form">
            <li>
              <label>Client name:</label>
              <input
                type="text"
                className="in-text"
                name="name"
                onChange={changeNameHandler}
              />
              {nameErr && <span className="form-span">Name is required</span>}
            </li>
            <li>
              <label>Address:</label>
              <input
                type="text"
                className="in-text"
                name="address"
                onChange={changeAddressHandler}
              />
              {addrErr && (
                <span className="form-span">Address is required</span>
              )}
            </li>
            <li>
              <label>City:</label>
              <input
                type="text"
                className="in-text"
                name="city"
                onChange={changeCityHandler}
              />
              {cityErr && <span className="form-span">City is required</span>}
            </li>
            <li>
              <label>Zip/Postal code:</label>
              <input
                type="text"
                className="in-text"
                name="zipCode"
                onChange={changePostalCodeHandler}
              />
              {pcErr && (
                <span className="form-span">PostalCode is required</span>
              )}
            </li>
            <li>
              <label>Country:</label>
              <select name="country" onChange={changeCountryHandler}>
                <option>Select country</option>
                {props.countries.map((country, index) => (
                  <option key={index} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              {countryErr && (
                <span className="form-span">Country is required</span>
              )}
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <input
                type="submit"
                onSubmit={() => submitHandler()}
                className="btn green"
                value="Save"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewClientPopup;
