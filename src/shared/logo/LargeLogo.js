import React from "react";
import logo from "../../assets/img/logo-large.png";

const LargeLogo = () => {
  return (
    <div className="logo-wrap">
      <a href="/" className="inner">
        <img src={logo} />
      </a>
    </div>
  );
};

export default LargeLogo;
