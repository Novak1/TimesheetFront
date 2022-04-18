import { useState, useCallback, useEffect } from "react";
import jwt_decode from "jwt-decode";

export const useAuth = () => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [passwordChanged, setPasswordChanged] = useState();

  const [roles, setRoles] = useState([]);

  const login = useCallback((token, passwChanged) => {
    setToken(token);
    setPasswordChanged((prevState) => (prevState = passwChanged));

    let decodedToken = getDecodedAccessToken(token);
    let roles = decodedToken.role;
    // console.log(decodedToken.PasswordChanged);
    // const changed = decodedToken.PasswordChanged == "True" ? true : false;

    setName(decodedToken.Name);
    setRoles(roles);

    console.log(roles);

    console.log(passwordChanged);

    localStorage.setItem("userData", token);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setName(null);
    setRoles([]);
    setPasswordChanged(false);
    localStorage.removeItem("userData");
  }, []);

  const changePassword = useCallback((passw) => {
    setPasswordChanged((prevState) => (prevState = passw));
  }, []);

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("userData"));
  //   if (token) {
  //     let decodedToken = getDecodedAccessToken(token);

  //     login(token, true);
  //   }
  // }, [login]);

  return { token, login, logout, name, roles, passwordChanged, changePassword };
};

const getDecodedAccessToken = (token) => {
  try {
    return jwt_decode(token);
  } catch (err) {
    throw err;
  }
};
