import React, { useState } from "react";

const ForgotPasswordForm = (props) => {
  const [email, setEmail] = useState("");

  const changeHandler = (e) => setEmail(e.target.value);

  const forgotPasswordHandler = () => {
    if (email !== "") props.resetPassword(email);
  };
  return (
    <div>
      <div className="centered-content-wrap">
        <div className="centered-block">
          <h1>reset password</h1>
          <ul>
            <li>
              <input
                type="text"
                placeholder="Email"
                className="in-text large"
                onChange={changeHandler}
              />
            </li>
            <li className="right">
              <a href="" className="btn orange" onClick={forgotPasswordHandler}>
                Reset password
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
