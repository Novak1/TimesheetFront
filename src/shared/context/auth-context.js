import { createContext } from "react";

export const AuthContext = createContext({
  token: null,
  name: null,
  login: () => {},
  logout: () => {},
  passwordChanged: false,
  changePassword: () => {},
});
