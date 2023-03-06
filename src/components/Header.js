import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";
import React, { Component }  from 'react';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <NavLinks />
    </header>
  );
};

export default Header;