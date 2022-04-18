import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo.png";

function HeaderLogo() {
  return (
    <Link to="/timesheet" className="logo">
      <img src={Logo} alt="VegaITSourcing Timesheet" />
    </Link>
  );
}

export default HeaderLogo;
