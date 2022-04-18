import React, { useState, useRef } from "react";
import $ from "jquery";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const RolesListItem = (props) => {
  const [error, setError] = useState();
  const [name, setName] = useState(props.role.name);
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

  const deleteRole = (event) => {
    event.preventDefault();
    props.delete(props.role.id);
  };

  const updateRole = (event) => {
    event.preventDefault();
    checkValidity();
    if (!error) {
      const body = {
        id: props.role.id,
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
        id={props.role.id}
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
                defaultValue={props.role.name}
                name="name"
                onChange={changeHandler}
              />
              {error && <span className="form-span">Name is required</span>}
            </li>
          </ul>
          {context.roles.find((r) => r === "Admin") !== undefined && (
            <div className="buttons">
              <div className="inner">
                <a href="#" onClick={updateRole} className="btn green">
                  Save
                </a>
                <a href="#" onClick={deleteRole} className="btn red">
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

export default RolesListItem;
