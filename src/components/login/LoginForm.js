import moment from "moment";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const LoginForm = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState("");

  const emailChanged = (event) => {
    setEmail(event.target.value);
    setError("");
  };

  const passwordChanged = (event) => {
    setPassword(event.target.value);
    setError("");
  };

  const loginHandler = (event) => {
    event.preventDefault();
    props.login(email, password).catch((err) => {
      console.log(err);
      setError(err.data);
    });
  };

  return (
    <div className="centered-content-wrap">
      <div className="centered-block">
        <h1>Login</h1>
        <ul>
          <li>
            <input
              type="text"
              placeholder="Email"
              className="in-text large"
              onChange={emailChanged}
            />
          </li>
          <li>
            <input
              type="password"
              placeholder="Password"
              className="in-pass large"
              onChange={passwordChanged}
            />
            <span style={{ color: "red" }}>{err}</span>
          </li>
          <li className="last">
            <input type="checkbox" className="in-checkbox" id="remember" />
            <label className="in-label" htmlFor="remember">
              Remember me
            </label>
            <span className="right">
              <Link to="/forgot-password" className="link">
                Forgot password?
              </Link>
              <button
                disabled={!email || !password}
                className="btn orange"
                onClick={loginHandler}
              >
                Login
              </button>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LoginForm;
