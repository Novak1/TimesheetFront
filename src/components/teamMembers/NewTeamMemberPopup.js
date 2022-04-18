import React, { useState } from "react";
import Modal from "react-modal";

const NewTeamMemberPopup = (props) => {
  const [error, setError] = useState([]);

  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(0);
  const [roles, setRoles] = useState([]);

  const changeNameHandler = (e) => setName(e.target.value);
  const changeEmailHandler = (e) => setEmail(e.target.value);
  const changeUsernameHandler = (e) => setUsername(e.target.value);
  const changeHoursHandler = (e) => setHours(e.target.value);
  const changeStatusHandler = (e) => setStatus(e.target.value);
  const changeRolesHandler = (e) => {
    if (roles.find((r) => r === e.target.value) === undefined) {
      const newRoles = [...roles];
      newRoles.push(e.target.value);
      setRoles(newRoles);
    }
  };

  const [nameErr, setNameErr] = useState(false);
  const [hoursErr, setHoursErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [rolesErr, setRolesErr] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    checkValidity();

    if (!nameErr && !emailErr && !hoursErr && !usernameErr && !rolesErr) {
      const body = {
        name: name,
        hoursPerWeek: hours,
        username: username,
        email: email,
        status: status,
        roles: roles,
      };

      console.log(body);
      props.create(body);
    }
  };

  const checkValidity = () => {
    resetErrors();

    if (name === "") {
      setNameErr(true);
    }
    if (hours === "") {
      setHoursErr(true);
    }
    if (username === "") {
      setUsernameErr(true);
    }
    if (email === "") {
      setEmailErr(true);
    }
    if (roles.length === 0) {
      setRolesErr(true);
    }
  };

  const resetErrors = () => {
    setNameErr(false);
    setHoursErr(false);
    setUsernameErr(false);
    setEmailErr(false);
    setRolesErr(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setModalIsOpen(false)}
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
        <h2>Create new team member</h2>
        <form onSubmit={submitHandler}>
          <ul className="form">
            <li>
              <label>Name:</label>
              <input
                type="text"
                className="in-text"
                name="name"
                onChange={changeNameHandler}
              />
              {error.find((element) => {
                return element.for === "name";
              }) && <span className="form-span">Name is required</span>}
            </li>
            <li>
              <label>Hours per week:</label>
              <input
                type="text"
                className="in-text"
                name="hoursPerWeek"
                onChange={changeHoursHandler}
              />
              {error.find((element) => {
                return element.for === "hours";
              }) && (
                <span className="form-span">Hours per week is required</span>
              )}
            </li>
            <li>
              <label>Username:</label>
              <input
                type="text"
                className="in-text"
                name="username"
                onChange={changeUsernameHandler}
              />
              {error.find((element) => {
                return element.for === "username";
              }) && <span className="form-span">Username is required</span>}
            </li>
            <li>
              <label>Email:</label>
              <input
                type="text"
                className="in-text"
                name="email"
                onChange={changeEmailHandler}
              />
              {error.find((element) => {
                return element.for === "email";
              }) && <span className="form-span">Email is required</span>}
            </li>
            <li className="inline">
              <label>Status:</label>
              <span className="radio">
                <label htmlFor="active">Active:</label>
                <input
                  type="radio"
                  value="1"
                  name="status"
                  onChange={changeStatusHandler}
                />
              </span>
              <span className="radio">
                <label htmlFor="inactive">Inactive:</label>
                <input
                  type="radio"
                  value="0"
                  name="status"
                  onChange={changeStatusHandler}
                />
              </span>
            </li>
            <li className="inline">
              <label>Role:</label>
              {props.roles.map((role) => (
                <span className="radio">
                  <label htmlFor={role.name}>{role.name}:</label>
                  <input
                    type="radio"
                    value={role.id}
                    name={role.name}
                    onChange={changeRolesHandler}
                  />
                </span>
              ))}
              {error.find((element) => {
                return element.for === "roles";
              }) && <span className="form-span">Role is required</span>}
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <input
                type="submit"
                className="btn green"
                value="Invite team member"
              />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewTeamMemberPopup;
