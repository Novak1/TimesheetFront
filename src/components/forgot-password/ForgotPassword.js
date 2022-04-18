import React from "react";
import LargeLogo from "../../shared/logo/LargeLogo";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPassword = (props) => {
  return (
    <div className="wrapper centered">
      <LargeLogo />
      <ForgotPasswordForm resetPassword={props.resetPassword} />
    </div>
  );
};

export default ForgotPassword;
