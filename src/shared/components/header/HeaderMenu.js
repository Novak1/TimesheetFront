import moment from "moment";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function HeaderMenu() {
  const [currentMonth, setCurrentMonth] = useState();
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    let month = moment().month() + 1;
    setCurrentMonth(month);

    let year = moment().year();
    setCurrentYear(year);
  }, []);

  return (
    <nav>
      <div className="menu">
        <NavLink
          to={`/timesheet/monthpreview/${currentMonth}/${currentYear}`}
          className="btn nav"
          activeClassName="active"
        >
          Timesheet
        </NavLink>
        <NavLink to="/clients" className="btn nav" activeClassName="active">
          Clients
        </NavLink>
        <NavLink to="/projects" className="btn nav" activeClassName="active">
          Projects
        </NavLink>
        <NavLink to="/categories" className="btn nav" activeClassName="active">
          Categories
        </NavLink>
        <NavLink
          to="/team-members"
          className="btn nav"
          activeClassName="active"
        >
          Team members
        </NavLink>
        <NavLink to="/countries" className="btn nav" activeClassName="active">
          Countries
        </NavLink>
        <NavLink to="/roles" className="btn nav" activeClassName="active">
          Roles
        </NavLink>
        <NavLink to="/reports" className="btn nav" activeClassName="active">
          Reports
        </NavLink>
      </div>
      <span className="line"></span>
    </nav>
  );
}

export default HeaderMenu;
