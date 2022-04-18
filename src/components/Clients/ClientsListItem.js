import React, { useState, useRef } from "react";
import $ from "jquery";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const ClientsListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const detailsRef = useRef();
  const context = useContext(AuthContext);

  const [name, setName] = useState(props.client.name);
  const [addr, setAddr] = useState(props.client.address);
  const [city, setCity] = useState(props.client.city);
  const [postalCode, setPostalCode] = useState(props.client.postalCode);
  const [countryId, setCountryId] = useState(props.client.countryId);

  const [nameErr, setNameErr] = useState(false);
  const [addrErr, setAddrErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [countryErr, setCountryErr] = useState(false);
  const [pcErr, setPcErr] = useState(false);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      $(detailsRef.current).slideDown("normal");
    } else {
      $(detailsRef.current).slideUp("normal");
    }
  };

  const changeNameHandler = (e) => setName(e.target.value);
  const changeCityHandler = (e) => setCity(e.target.value);
  const changeAddressHandler = (e) => setAddr(e.target.value);
  const changePostalCodeHandler = (e) => setPostalCode(e.target.value);
  const changeCountryHandler = (e) => setCountryId(e.target.value);

  const deleteClient = (event) => {
    event.preventDefault();
    console.log(props.client);
    props.deleteClient(props.client.id);
  };

  const updateClient = (event) => {
    event.preventDefault();
    checkValidity();

    if (!nameErr && !cityErr && !pcErr && !countryErr && !addrErr) {
      props.updateClient({
        id: props.client.id,
        name: name,
        address: addr,
        city: city,
        postalCode: postalCode,
        countryId: countryId,
      });
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
    if (countryId === "") {
      setCountryErr(true);
    }
  };

  const resetErrors = () => {
    setNameErr(false);
    setAddrErr(false);
    setCityErr(false);
    setPcErr(false);
    setCountryErr(false);
  };

  return (
    <div className="item" id="button">
      <div
        className="heading"
        onClick={() => setIsOpenHandler()}
        id={props.client.id}
      >
        <span>{name}</span>
        <i>+</i>
      </div>
      <div className="details" ref={detailsRef}>
        <form>
          <ul className="form">
            <li>
              <label>Client name:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.client.name}
                name="name"
                onChange={changeNameHandler}
              />
              {nameErr && <span className="form-span">Name is required</span>}
            </li>
            <li>
              <label>Zip/Postal code:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.client.postalCode}
                name="zipCode"
                onChange={changePostalCodeHandler}
              />
              {pcErr && (
                <span className="form-span">PostalCode is required</span>
              )}
            </li>
          </ul>
          <ul className="form">
            <li>
              <label>Address:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.client.address}
                name="address"
                onChange={changeAddressHandler}
              />
              {addrErr && (
                <span className="form-span">Address is required</span>
              )}
            </li>

            <li>
              <label>Country:</label>
              <select
                name="country"
                onChange={changeCountryHandler}
                value={props.client.country}
              >
                {props.countries.map((country, index) => (
                  <option
                    key={index}
                    defaultValue={
                      country.id === props.client.countryId ? true : false
                    }
                    value={country.id}
                  >
                    {country.name}
                  </option>
                ))}
              </select>
              {countryErr && (
                <span className="form-span">Country is required</span>
              )}
            </li>
          </ul>
          <ul className="form last">
            <li>
              <label>City:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.client.city}
                name="city"
                onChange={changeCityHandler}
              />
              {cityErr && <span className="form-span">City is required</span>}
            </li>
          </ul>
          {context.roles.find((r) => r === "Admin") !== undefined && (
            <div className="buttons">
              <div className="inner">
                <a href="#" onClick={updateClient} className="btn green">
                  Save
                </a>
                <a href="#" onClick={deleteClient} className="btn red">
                  Delete
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ClientsListItem;
