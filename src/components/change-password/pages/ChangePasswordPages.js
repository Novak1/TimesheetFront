import React from "react";
import ChangePassword from "../ChangePassword";
import axios from "axios";
import { useHistory } from "react-router-dom";
import moment from "moment";
import { useAuth } from "../../../hooks/auth-hook";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../../shared/context/auth-context";

const ChangePasswordPages = () => {
  const history = useHistory();
  const { changePassword } = useAuth();
  const context = useContext(AuthContext);

  const changePasswordAsync = async (body) => {
    await axios
      .post("/teammember/change-password", body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        context.changePassword(true);

        let month = moment().month() + 1;
        let year = moment().year();
        history.push(`/timesheet/monthpreview/${month}/${year}`);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          console.log(err.response);
          throw err.response;
        }
      });
  };
  return (
    <>
      <ChangePassword changePassword={changePasswordAsync} />
    </>
  );
};

export default ChangePasswordPages;
