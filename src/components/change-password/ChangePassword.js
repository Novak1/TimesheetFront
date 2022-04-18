import React from "react";
import LargeLogo from "../../shared/logo/LargeLogo";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePassword = (props) => {
  return (
    <div>
      <div className="wrapper centered">
        <LargeLogo />
        <ChangePasswordForm changePassword={props.changePassword} />
      </div>
    </div>
  );
};

export default ChangePassword;
