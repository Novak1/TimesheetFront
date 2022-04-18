import React, { useContext } from "react";
import Login from "../Login";
import jwt_decode from "jwt-decode";
import { AuthContext } from "../../../shared/context/auth-context";
import axios from "axios";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../../hooks/auth-hook";

const LoginPages = (props) => {
  const context = useContext(AuthContext);
  const history = useHistory();
  const { login, logout, passwordChanged } = useAuth();

  const logIn = async (email, password) => {
    const body = { Email: email, Password: password };
    try {
      let response = await axios.post("/teammember/login", body);

      if (response.data) {
        // localStorage.setItem("userData", response.data.token);
        // let decodedToken = getDecodedAccessToken(response.data.token);
        // context.name = decodedToken.Name;

        context.login(response.data.token, response.data.passwordChanged);

        if (response.data.passwordChanged) {
          let month = moment().month() + 1;
          let year = moment().year();
          history.push(`/timesheet/monthpreview/${month}/${year}`);
        } else {
          history.push(`/change-password`);
        }
      }
    } catch (err) {}
  };

  const logOut = () => {
    context.logout();
  };

  return <Login login={logIn} />;
};

export default LoginPages;

const getDecodedAccessToken = (token) => {
  try {
    return jwt_decode(token);
  } catch (err) {
    throw err;
  }
};
