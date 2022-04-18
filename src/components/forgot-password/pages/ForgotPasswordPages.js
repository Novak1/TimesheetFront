import React from "react";
import axios from "axios";
import ForgotPassword from "../ForgotPassword";

const ForgotPasswordPages = () => {
  const resetPasswordAsync = async (email) => {
    return await axios
      .post(
        "/teammember/reset-password",
        { email },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userData")}`,
          },
        }
      )
      .then((response) => {
        console.log("Password reset");
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };

  return (
    <>
      <ForgotPassword resetPassword={resetPasswordAsync} />
    </>
  );
};

export default ForgotPasswordPages;
