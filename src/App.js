import "./App.css";
import React from "react";
import "./assets/css/style.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ClientsPages from "./components/Clients/pages/ClientsPages";
import ProjectsPages from "./components/projects/pages/ProjectsPages";
import TeamMembersPages from "./components/teamMembers/pages/TeamMembersPages";
import CategoriesPages from "./components/categories/pages/CategoriesPages";
import ReportsPages from "./components/reports/pages/ReportsPages";
import TimeSheetsPages from "./components/timeSheets/pages/TimeSheetsPages";
import WeekTimeSheetPages from "./components/timeSheets/week-preview/pages/WeekTimeSheetPages";
import LoginPages from "./components/login/pages/LoginPages";
import ForgotPasswordPages from "./components/forgot-password/pages/ForgotPasswordPages";
import ChangePasswordPages from "./components/change-password/pages/ChangePasswordPages";
import RolePages from "./components/roles/pages/RolePages";
import CountryPages from "./components/countries/pages/CountryPages";
import { useAuth } from "./hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";

function App() {
  const { token, login, logout, name, roles, passwordChanged, changePassword } =
    useAuth();

  let routes;
  if (token && passwordChanged) {
    routes = (
      <Switch>
        <Route exact path="/login" component={LoginPages} />
        <Route
          exact
          path="/timesheet/monthpreview/:month/:year"
          component={TimeSheetsPages}
        />
        <Route
          exact
          path="/timesheet/weekpreview/:month/:year/:day"
          component={WeekTimeSheetPages}
        />
        <Route exact path="/clients" component={ClientsPages} />
        <Route exact path="/projects" component={ProjectsPages} />
        <Route exact path="/team-members" component={TeamMembersPages} />
        <Route exact path="/categories" component={CategoriesPages} />
        <Route exact path="/reports" component={ReportsPages} />
        <Route exact path="/forgot-password" component={ForgotPasswordPages} />
        <Route exact path="/change-password" component={ChangePasswordPages} />
        <Route exact path="/roles" component={RolePages} />
        <Route exact path="/countries" component={CountryPages} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    );
  } else if (token && !passwordChanged) {
    routes = (
      <Switch>
        <Route exact path="/change-password" component={ChangePasswordPages} />
        <Redirect exact from="/" to="/change-password" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={LoginPages} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        token: token,
        roles: roles,
        name: name,
        login: login,
        logout: logout,
        passwordChanged: passwordChanged,
        changePassword: changePassword,
      }}
    >
      <div className="container">
        <Router>{routes}</Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
