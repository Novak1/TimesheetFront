import React, { useState } from "react";

const ChangePasswordForm = (props) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [oldPasswError, setOldPasswError] = useState(false);
  const [newPasswError, setNewPasswError] = useState(false);
  const [confirmPasswError, setConfirmPasswError] = useState(false);
  const [passwMatchError, setPasswMatchError] = useState(false);

  const checkValidity = () => {
    resetErrors();
    if (oldPass === "") {
      setOldPasswError(true);
    }
    if (newPass === "") {
      setNewPasswError(true);
    }
    if (confirmPass === "") {
      setConfirmPasswError(true);
    }

    if (confirmPass !== newPass) {
      setPasswMatchError(true);
    }
  };

  const resetErrors = () => {
    setOldPasswError(false);
    setNewPasswError(false);
    setConfirmPasswError(false);
    setPasswMatchError(false);
  };

  const changePasswordHandler = (event) => {
    event.preventDefault();
    checkValidity();

    if (
      !oldPasswError &&
      !newPasswError &&
      !confirmPasswError &&
      !passwMatchError
    ) {
      const body = {
        oldPassword: oldPass,
        newPassword: newPass,
        confirmPassword: confirmPass,
      };
      props.changePassword(body);
    }
  };

  const changeNewHandler = (e) => setNewPass(e.target.value);
  const changeOldHandler = (e) => setOldPass(e.target.value);
  const changeConfirmHandler = (e) => setConfirmPass(e.target.value);

  return (
    <div>
      <div className="centered-content-wrap">
        <div className="centered-block">
          <h1>Change password</h1>
          <ul>
            <li>
              <input
                type="password"
                placeholder="Old password"
                className="in-pass large"
                onChange={changeOldHandler}
              />
              {oldPasswError && (
                <span className="form-span">Old password is required</span>
              )}
            </li>

            <li>
              <input
                type="password"
                placeholder="New password"
                className="in-pass large"
                onChange={changeNewHandler}
              />
              {newPasswError && (
                <span className="form-span">New password is required</span>
              )}
            </li>
            <li>
              <input
                type="password"
                placeholder="Confirm password"
                className="in-pass large"
                onChange={changeConfirmHandler}
              />
              {confirmPasswError && (
                <span className="form-span">Confirm password is required</span>
              )}
              {passwMatchError && (
                <span className="form-span">Passwords dont match</span>
              )}
            </li>
            <li className="right">
              <a href="" className="btn orange" onClick={changePasswordHandler}>
                Change password
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
