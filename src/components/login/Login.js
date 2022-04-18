import React from "react";
import LargeLogo from "../../shared/logo/LargeLogo";

import LoginForm from "./LoginForm";

const Login = (props) => {
  return (
    <div className="wrapper centered">
      <LargeLogo />
      <LoginForm login={props.login} />
    </div>
  );
};

export default Login;
