import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderUser from "./HeaderUser";

function Header() {
  return (
    <header className="header">
      <div className="top-bar"></div>
      <div className="wrapper">
        <HeaderLogo />
        <HeaderUser />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
