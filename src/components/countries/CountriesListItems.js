import React, { useState, useRef } from "react";
import $ from "jquery";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const CountriesListItems = (props) => {
  const [error, setError] = useState(false);
  const [name, setName] = useState(props.country.name);
  const context = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const detailsRef = useRef();

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      $(detailsRef.current).slideDown("normal");
    } else {
      $(detailsRef.current).slideUp("normal");
    }
  };

  const changeHandler = (e) => setName(e.target.value);
  const deleteCountry = (event) => {
    event.preventDefault();
    props.delete(props.country.id);
  };

  const updateCountry = (event) => {
    event.preventDefault();
    checkValidity();

    if (!error) {
      const body = {
        id: props.country.id,
        name: name,
      };

      props.update(body);
    }
  };

  const checkValidity = () => {
    setError(false);
    if (name === "") {
      setError(true);
    }
  };

  return (
    <div className="item" id="button">
      <div className="heading" onClick={setIsOpenHandler} id={props.country.id}>
        <span>{name}</span>
        <i>+</i>
      </div>
      <div className="details" ref={detailsRef}>
        <form>
          <ul className="form">
            <li>
              <label>Name:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.country.name}
                name="name"
                onChange={changeHandler}
              />
              {error && <span className="form-span">Name is required</span>}
            </li>
          </ul>
          {context.roles.find((r) => r === "Admin") !== undefined && (
            <div className="buttons">
              <div className="inner">
                <a href="#" onClick={updateCountry} className="btn green">
                  Save
                </a>
                <a href="#" onClick={deleteCountry} className="btn red">
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

export default CountriesListItems;
