import React, { useRef, useState } from "react";
import $ from "jquery";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const TeamMembersListItem = (props) => {
  const [error, setError] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(AuthContext);

  const [name, setName] = useState(props.teamMember.name);
  const [hours, setHours] = useState(props.teamMember.hoursPerWeek);
  const [username, setUsername] = useState(props.teamMember.username);
  const [email, setEmail] = useState(props.teamMember.email);
  const [status, setStatus] = useState(props.teamMember.status);
  const [roles, setRoles] = useState(
    props.teamMember.roles.map((r) => r.roleId)
  );

  const [nameErr, setNameErr] = useState(false);
  const [hoursErr, setHoursErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [rolesErr, setRolesErr] = useState(false);

  const detailsRef = useRef();

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      $(detailsRef.current).slideDown("normal");
    } else {
      $(detailsRef.current).slideUp("normal");
    }
  };

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
      console.log(roles);
    }
  };

  const deleteTeamMember = (event) => {
    event.preventDefault();
    props.delete(props.teamMember.id);
  };
  const resetPassword = () => {};

  const updateTeamMember = (event) => {
    event.preventDefault();
    checkValidity();

    if (!nameErr && !emailErr && !hoursErr && !usernameErr && !rolesErr) {
      const body = {
        id: props.teamMember.id,
        name: name,
        hoursPerWeek: hours,
        username: username,
        email: email,
        status: status,
        roles: roles,
      };
      console.log(body);

      props.update(body);
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
    <div className="item" id="button">
      <div
        className="heading"
        onClick={() => setIsOpenHandler()}
        id={props.teamMember.id}
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
                defaultValue={props.teamMember.name}
                name="name"
                onChange={changeNameHandler}
              />
              {nameErr && <span className="form-span">Name is required</span>}
            </li>
            <li>
              <label>Hours per week:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.teamMember.hoursPerWeek}
                name="name"
                onChange={changeHoursHandler}
              />
              {hoursErr && <span className="form-span">Name is required</span>}
            </li>
            <li className="inline">
              <label>Status:</label>
              <span className="radio">
                <label htmlFor="inactive">Inactive:</label>
                <input
                  type="radio"
                  value="0"
                  name="status"
                  onChange={changeStatusHandler}
                  defaultChecked={props.teamMember.memberStatus === 0}
                />
              </span>
              <span className="radio">
                <label htmlFor="active">Active:</label>
                <input
                  type="radio"
                  value="1"
                  name="status"
                  onChange={changeStatusHandler}
                  defaultChecked={props.teamMember.memberStatus === 1}
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
                    defaultChecked={
                      props.teamMember.roles.find(
                        (r) => r.roleId === role.id
                      ) !== undefined
                    }
                  />
                </span>
              ))}
              {rolesErr && <span className="form-span">Role is required</span>}
            </li>
          </ul>
          <ul className="form">
            <li>
              <label>Username:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.teamMember.username}
                name="username"
                onChange={changeUsernameHandler}
              />
              {usernameErr && (
                <span className="form-span">Userame is required</span>
              )}
            </li>
          </ul>
          <ul className="form last">
            <li>
              <label>Email:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.teamMember.email}
                name="email"
                onChange={changeEmailHandler}
              />
              {emailErr && <span className="form-span">Email is required</span>}
            </li>
          </ul>
          {context.roles.find((r) => r === "Admin") !== undefined && (
            <div className="buttons">
              <div className="inner">
                <a href="#" onClick={updateTeamMember} className="btn green">
                  Save
                </a>
                <a href="#" onClick={deleteTeamMember} className="btn red">
                  Delete
                </a>
                <a href="#" onClick={resetPassword} className="btn orange">
                  Reset Password
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default TeamMembersListItem;
