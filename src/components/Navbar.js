// I WILL BE USING STYLED COMPONENTS PACKAGE TO CODE THE CSS IN FILE ITSELF.
import React from "react";
import Logo from "../images/logo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="reunion" />
      <ul className="navList">
        <li>Rent</li>
        <li>Buy</li>
        <li>Sell</li>
        <li>Resourses</li>
      </ul>
      <ul className="logui">
        <button>Login</button>
        <button>Signup</button>
      </ul>
    </div>
  );
};

export default Navbar;
