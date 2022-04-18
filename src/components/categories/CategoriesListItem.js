import React, { useState, useRef } from "react";
import $ from "jquery";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";
import { useAuth } from "../../hooks/auth-hook";

const CategoriesListItem = (props) => {
  const [error, setError] = useState(false);
  const [name, setName] = useState(props.category.name);

  const [isOpen, setIsOpen] = useState(false);

  const detailsRef = useRef();
  const { roles } = useAuth();
  // const context = useContext(AuthContext);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      $(detailsRef.current).slideDown("normal");
    } else {
      $(detailsRef.current).slideUp("normal");
    }
  };

  const changeHandler = (e) => setName(e.target.value);
  const deleteCategory = (event) => {
    event.preventDefault();
    props.delete(props.category.id);
  };

  const updateCategory = (event) => {
    event.preventDefault();
    checkValidity();
    if (error.length === 0) {
      const body = {
        id: props.category.id,
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
      <div
        className="heading"
        onClick={() => setIsOpenHandler()}
        id={props.category.id}
      >
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
                defaultValue={props.category.name}
                name="name"
                onChange={changeHandler}
              />
              {error && <span className="form-span">Name is required</span>}
            </li>
          </ul>
          {roles.find((r) => r === "Admin") !== undefined && (
            <div className="buttons">
              <div className="inner">
                <a href="#" onClick={updateCategory} className="btn green">
                  Save
                </a>
                <a href="#" onClick={deleteCategory} className="btn red">
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

export default CategoriesListItem;
